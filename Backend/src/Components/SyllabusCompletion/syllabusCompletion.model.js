const mongoose = require("mongoose");

const slbscmpltnSchema = new mongoose.Schema({
    language: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, require: true },
    shift: { type: String, require: true },
    teachers: [{ type: String, require: true }],
    image: { type: String, require: true }
})

const Slbscmpltn = mongoose.model("slbscmpltn", slbscmpltnSchema);

module.exports = Slbscmpltn