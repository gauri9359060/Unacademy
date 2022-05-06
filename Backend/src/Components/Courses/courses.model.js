const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    card: [{ type: Object, required: true },]
})

const Course = mongoose.model("course", courseSchema);

module.exports = Course