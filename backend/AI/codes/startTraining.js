
const path = require('path');

const trainModel = require('./trainModel');
const recommendDiets = require('./recommendDiets');
const userFilePath = path.resolve(__dirname, 'updated_dataset.csv');
const dietFilePath = path.resolve(__dirname, 'All_Diets.csv');

(async () => {
    // Train and save the model (run this only once or when you retrain the model)
    await trainModel({ dietFilePath, userFilePath });

    // Later, load the saved model and make predictions
    const newUser = [25, 1, 170, 70, 65];  // Example user features
    const recommendations = await recommendDiets(newUser);
    console.log('Recommended diets:', recommendations);
})();
