const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    phone: {type:String, required:true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    state:{type:String,required:true, default:"Uttar Pradesh"}
})

const User = mongoose.model("user", userSchema);

module.exports = User