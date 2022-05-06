const mongoose = require("mongoose");

const bestSchema = new mongoose.Schema({
    language:{type:String, require:true},
    course: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, require: true },
    lessons: { type: String, require: true },
    teachers: { type: String, require: true },
    image: { type: String, require: true }
})

const Best = mongoose.model("best", bestSchema);

module.exports = Best