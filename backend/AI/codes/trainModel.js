const tf = require('@tensorflow/tfjs-node');
const preprocessData = require('./preProcessing');
const loadCSVData = require('./loadCsvData');
const path = require('path');



// Define the path to save the model
const modelSavePath = path.resolve(__dirname, '../model/');

const trainModel = async ({ dietFilePath, userFilePath }) => {
    const diets = await loadCSVData(dietFilePath);
    const users = await loadCSVData(userFilePath);
    const { userFeatures, dietFeatures, labels } = preprocessData(users, diets);

    const userTensor = tf.tensor2d(userFeatures);
    const dietTensor = tf.tensor2d(dietFeatures);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    const inputTensor = tf.concat([userTensor, dietTensor], 1);
    console.log('Input Tensor Shape:', inputTensor.shape);  // Should be [n_samples, n_features]
    console.log('Label Tensor Shape:', labelTensor.shape);  // Should be [n_samples, 1]


    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [inputTensor.shape[1]], units: 128, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

    model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

    await model.fit(inputTensor, labelTensor, {
        epochs: 1,
        batchSize: 10,
        validationSplit: 0.2,
        callbacks: tf.callbacks.earlyStopping({ monitor: 'val_loss', patience: 5 }),
    });

    
    // Save the model to the ../model directory
    await model.save('file:///home/godking/biswabaral417/GymMangementSystem/backend/AI/model');
    console.log('Model training completed.');
    return model;
};

module.exports = trainModel;
