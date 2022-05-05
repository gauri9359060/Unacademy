const mongoose = require("mongoose");

const recentSchema = new mongoose.Schema({
    language: { type: String, require: true },
    course: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, require: true },
    lessons: { type: String, require: true },
    teachers: { type: String, require: true },
    image: { type: String, require: true }
})

const Recent = mongoose.model("recent", recentSchema);

module.exports = Recent