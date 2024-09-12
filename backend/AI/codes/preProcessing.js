const preprocessData = (users, diets) => {
    const userFeatures = [];
    const dietFeatures = [];
    const labels = [];

    users.forEach((user) => {
        const userDietType = user.diet.toLowerCase();

        diets.forEach((diet) => {
            if (diet.Diet_type.toLowerCase() === userDietType) {
                userFeatures.push([
                    parseFloat(user.age),
                    user.gender === 'Male' ? 1 : 0,
                    parseFloat(user.height),
                    parseFloat(user.weight),
                    parseFloat(user.target_weight),
                ]);

                dietFeatures.push([
                    parseFloat(diet['Protein(g)']),
                    parseFloat(diet['Carbs(g)']),
                    parseFloat(diet['Fat(g)']),
                ]);
                labels.push(1);  // Positive sample
            } else {
                // Ensure this branch produces valid features and labels for negative samples
                userFeatures.push([
                    parseFloat(user.age),
                    user.gender === 'Male' ? 1 : 0,
                    parseFloat(user.height),
                    parseFloat(user.weight),
                    parseFloat(user.target_weight),
                ]);

                dietFeatures.push([
                    parseFloat(diet['Protein(g)']),
                    parseFloat(diet['Carbs(g)']),
                    parseFloat(diet['Fat(g)']),
                ]);
                labels.push(0);  // Negative sample
            }
        });
    });

    return { userFeatures, dietFeatures, labels };
};

module.exports=preprocessData