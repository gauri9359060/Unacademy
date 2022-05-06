const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
    type: {type:String,required:true},
    months: { type: Number, required: true },
    price: { type: Number, required: true },
    saving: { type: String, required: true },
    total: { type: String, required: true },
    checked: { type: Boolean, required: true }
})

const Price = mongoose.model("price", priceSchema);

module.exports = Price