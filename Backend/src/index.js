const express = require("express");

const mongoose = require("mongoose");
const port = 8005
const DB_url = "mongodb+srv://Ashish8923:ashu_8923@unacademy.upire.mongodb.net/Unacademy?retryWrites=true&w=majority"
const educatorController= require("./Controllers/educators.controller")


const app =express();

app.use(express.json());
app.use("/educator",educatorController)
const connect = () => {
    return mongoose.connect(DB_url);
}
app.listen(port, async () => {
    try {
        await connect();
        console.log(`connected to port: ${port}`)
    }
    catch (e) {
        console.log(e.message)
    }
})
