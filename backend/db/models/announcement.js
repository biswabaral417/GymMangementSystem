const mongoose = require("mongoose");

const announcementsSchema = new mongoose.Schema({
    title: {
        type: String,
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
    priority: {
        type: String,
        enum: ["low", "normal", 'high'],
        default: "normal",
    },
    endDate:{
        type:Date
    }
});

const announcements = mongoose.model("announcements", announcementsSchema);

module.exports = announcements;
