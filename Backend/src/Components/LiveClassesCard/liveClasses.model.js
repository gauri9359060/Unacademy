const mongoose = require("mongoose");

const liveClassSchema = new mongoose.Schema({

    name: { type: String, require: true },
    heading: { type: String, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
    id: { type: String, require: true },
    image: { type: String, require: true }
})

const LiveClass = mongoose.model("liveClass", liveClassSchema);

module.exports = LiveClass