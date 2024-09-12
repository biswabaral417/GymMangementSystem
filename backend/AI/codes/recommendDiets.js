const tf = require('@tensorflow/tfjs-node');
const loadCSVData = require('./loadCsvData');
const path = require('path');

const dietFilePath = path.resolve(__dirname, 'All_Diets.csv');
const modelLoadPath = path.resolve(__dirname, '../model/model.json');

let modelPromise = null; // Cache the model promise

const recommendDiets = async (newUser) => {
    const targetWeight = newUser[4]; // Target weight to gain
    const userWeight = newUser[3];
    console.log(newUser[4]);

    // Daily Macronutrient Needs Calculation
    const proteinPerKg = 2.0;
    const carbsPerKg = 5.0;
    const fatsPerKg = 1.0;

    const dailyProtein = userWeight * proteinPerKg;
    const dailyCarbs = targetWeight * carbsPerKg;
    const dailyFats = targetWeight * fatsPerKg;

    const proteinPerMeal = dailyProtein / 4;
    const carbsPerMeal = dailyCarbs / 4;
    const fatsPerMeal = dailyFats / 4;

    try {
        // Load the model once and cache it
        if (!modelPromise) {
            modelPromise = tf.loadLayersModel(`file://${modelLoadPath}`);
            console.log('Model loaded from disk.');
        }
        const model = await modelPromise;

        // Load diet data from CSV
        const diets = await loadCSVData(dietFilePath);

        // Process and predict diet scores
        const dietPredictions = diets.map(diet => ({
            dietName: diet.Recipe_name,
            protein: parseFloat(diet['Protein(g)']),
            carbs: parseFloat(diet['Carbs(g)']),
            fat: parseFloat(diet['Fat(g)'])
        }));

        // Create input tensor for all diets at once for batch predictions
        const dietFeatures = dietPredictions.map(diet => [
            diet.protein,
            diet.carbs,
            diet.fat
        ]);

        const input = dietFeatures.map(dietFeature => newUser.concat(dietFeature));
        const inputTensor = tf.tensor2d(input);
        const predictions = model.predict(inputTensor).dataSync();

        // Map predictions back to diets and sort by score
        const dietWithScores = dietPredictions.map((diet, index) => ({
            dietName: diet.dietName,
            score: predictions[index],
            protein: diet.protein,
            carbs: diet.carbs,
            fat: diet.fat
        }));

        // Use only the top 20 diets
        const top20Diets = dietWithScores.sort((a, b) => b.score - a.score).slice(0, 180);

        // Distribute meals across the week
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const result = [];

        for (let i = 0; i < 7; i++) {
            const dayMeals = [];
            let totalProtein = 0;
            let totalCarbs = 0;
            let totalFats = 0;

            while (dayMeals.length < 4) {
                let meal = {
                    protein: 0,
                    carbs: 0,
                    fat: 0,
                    items: []
                };

                while (meal.protein < proteinPerMeal && meal.carbs < carbsPerMeal && meal.fat < fatsPerMeal) {
                    if (top20Diets.length === 0) break; // Break if no more diets are available

                    const diet = top20Diets.shift(); // Get the next best diet

                    if (diet.protein < (proteinPerMeal +20)) {
                        console.log(diet.protein)
                        meal.items.push(diet.dietName);
                        meal.protein += diet.protein;
                        meal.carbs += diet.carbs;
                        meal.fat += diet.fat;

                     

                        dayMeals.push({
                            meal: meal.items.join(', '),
                            protein: meal.protein,
                            carbs: meal.carbs,
                            fat: meal.fat
                        });
                    }
                    if (meal.protein >= proteinPerMeal && meal.carbs >= carbsPerMeal && meal.fat >= fatsPerMeal) {
                        break; // Exit while loop if meal meets the nutritional requirements
                    }
                }

                totalProtein += meal.protein;
                totalCarbs += meal.carbs;
                totalFats += meal.fat;

                if (totalProtein >= dailyProtein && totalCarbs >= dailyCarbs && totalFats >= dailyFats) break;
            }

            // Ensure the total daily protein is within range
            if (totalProtein > dailyProtein + 20) {
                // Remove some meals if protein is too high
                while (totalProtein > dailyProtein + 10 && dayMeals.length > 1) {
                    const removedMeal = dayMeals.pop();
                    totalProtein -= removedMeal.protein;
                    totalCarbs -= removedMeal.carbs;
                    totalFats -= removedMeal.fat;
                }
            }

            // If nutritional goals are not met, adjust with more diets
            if (totalProtein < dailyProtein - 10 || totalCarbs < dailyCarbs - 10 || totalFats < dailyFats - 10) {
                const additionalDiets = top20Diets.filter(diet =>
                    (totalProtein < dailyProtein || totalCarbs < dailyCarbs || totalFats < dailyFats)
                );

                while (totalProtein < dailyProtein - 10 || totalCarbs < dailyCarbs - 10 || totalFats < dailyFats - 10) {
                    const additionalDiet = additionalDiets.shift(); // Get the next best diet
                    if (additionalDiet.protein<(proteinPerMeal+10)) {
                        dayMeals.push({
                            meal: additionalDiet.dietName,
                            protein: additionalDiet.protein,
                            carbs: additionalDiet.carbs,
                            fat: additionalDiet.fat
                        });
                        totalProtein += additionalDiet.protein;
                        totalCarbs += additionalDiet.carbs;
                        totalFats += additionalDiet.fat;
                    } else {
                        break;
                    }
                }
            }

            result.push({ day: daysOfWeek[i], meals: dayMeals });
        }

        // Print total protein for each day
        for (const day of result) {
            let totalProtein = 0;

            for (const meal of day.meals) {
                totalProtein += meal.protein;
            }

            console.log(`Total protein for ${day.day}: ${totalProtein}g`);
        }

        return result;
    } catch (error) {
        console.error('Error in diet recommendation:', error);
        throw new Error('Failed to get diet recommendations');
    }
};

module.exports = recommendDiets;
