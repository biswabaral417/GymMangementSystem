const tf = require('@tensorflow/tfjs-node');
const path = require('path');

// Path to the saved model
const modelPath = path.join(__dirname, '../AI/model/model.json');

const loadModel = async () => {
    try {
        // Load the pre-trained model from the file system
        const model = await tf.loadLayersModel(`file://${modelPath}`);
        console.log("Model successfully loaded from file.");
        return model;
    } catch (err) {
        console.error("Error loading model:", err);
        throw new Error("Failed to load the pre-trained model.");
    }
};

module.exports = loadModel;
