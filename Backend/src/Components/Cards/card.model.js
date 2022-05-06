const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    paragraph: { type: String, required: true },

})

const Card = mongoose.model("card", cardSchema);

module.exports = Card