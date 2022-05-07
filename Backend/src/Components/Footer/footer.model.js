const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    content: [{ type: Object, required: true }]
})

const Footer = mongoose.model("footer", footerSchema);

module.exports = Footer