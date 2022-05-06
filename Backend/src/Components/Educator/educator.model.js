const mongoose = require("mongoose");

const educatorSchema = new mongoose.Schema({
   Name: { type: String, required: true },
    Description: { type: String, required: true },
    followers: { type: String, required: true },
    watchMin: { type: String, required: false, default:"0" },
    image:{type:String, required:false}
})

const Educator = mongoose.model("educator", educatorSchema);

module.exports = Educator