const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true

    },
    dailyStatus: {
        type: [{ date: String, status: Boolean }],
        default: []
    },
    priority: {
        type: String,
        enum: ["low", "mid", 'high'],
        default: "mid",
    }
});

const todos = mongoose.model("todos", todoSchema);

module.exports = todos;
