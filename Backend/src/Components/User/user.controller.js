const express = require("express")
const router = express.Router();
const User = require("./user.model")
const crudController = require("../../CrudController/crud.controller")
const userController = crudController(User)
const jwt = require('jsonwebtoken');

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

router.post("/register",async(req,res)=>{
    try {
        let user = await UserModel.findOne({ phone: req.body.phone })

        if (user) {
            return res.status(401).json("User already exist kindly logIn")
        }

        user = await UserModel.create(req.body)
        let token = newToken(user)
        res.status(201).json({ token })
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})
router.post("/login", async (req, res) => {
    try {
        let user = await UserModel.findOne({ phone: req.body.phone })

        if (!user) {
            return res.status(401).json("OTP is incorrect")
        }

        const matching = await user.checkPassword(req.body.OTP)
        if (!matching) {
            return res.status(401).json("OTP is incorrect")
        }
        let token = newToken(user)
        res.status(201).json({ token })

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})


module.exports = router