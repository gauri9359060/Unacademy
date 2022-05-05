const mongoose = require("mongoose");

const ratingCardSchema = new mongoose.Schema({
   title: { type: String, required: true },
    count: { type: String, require: true }, 
   image:{type:String, required:false}
})

const RatingCard = mongoose.model("ratingCard", ratingCardSchema);

module.exports = RatingCard