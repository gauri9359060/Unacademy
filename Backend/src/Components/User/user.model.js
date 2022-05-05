const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" },
    age: { type: Number, required: true },
    phone: {type:Number, required:true},
    course:{type:String, required:false}
})

const User = mongoose.model("user", userSchema);

module.exports = User