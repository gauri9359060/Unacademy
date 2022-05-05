const mongoose = require("mongoose");

const ratingCard2Schema = new mongoose.Schema({
    title: { type: String, required: true },
    count: { type: String, require: true },
    image: { type: String, required: false }
})

const RatingCard2 = mongoose.model("ratingCard2", ratingCard2Schema);

module.exports = RatingCard2