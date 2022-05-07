const express = require("express")
const router = express.Router();
const User = require("./user.model")
const crudController = require("../../CrudController/crud.controller")
const userController = crudController(User)
const jwt = require('jsonwebtoken');
require("dotenv").config();
const newToken = (user) => jwt.sign({user},'unacademy')

router.post("/register",async(req,res)=>{
    // console.log(process.env.JWT_SECRET_KEY)
    try {
        let user = await User.findOne({ phone: req.body.phone })

        if (user) {
            return res.status(401).json("User already exist")
        }

        user = await User.create(req.body)
        let token = newToken(user)
        res.status(201).json({ token })
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})
router.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({ phone: req.body.phone })

        if (!user) {
            return res.status(401).json("Number is Invalid")
        }

        let token = newToken(user)
        res.status(201).json({ token })

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})
router.get("/",userController.getAll)

module.exports = router