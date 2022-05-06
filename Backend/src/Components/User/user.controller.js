const express = require("express")
const router = express.Router();
const User = require("./user.model")
const crudController = require("../../CrudController/crud.controller")
const userController = crudController(User)

router.post("/",userController.post)
router.get("/",userController.getAll)
router.get("/:id",userController.getOne)
router.patch("/:id", userController.update)

module.exports = router