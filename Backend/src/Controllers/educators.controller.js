const express= require("express")
const router = express.Router(); 
const Educator = require("../Models/educator.model")
router.get("/", async (req, res) => {
    let educators = await Educator.find({})
    console.log(educators)
    res.status(200).json(educators);
})

module.exports = router