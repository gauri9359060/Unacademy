const express= require("express")
const router = express.Router(); 
const Educator = require("./educator.model")
const crudController = require("../../CrudController/crud.controller")

const educatorController = crudController(Educator)
router.get("/",educatorController.getAll)
router.get("/:id", educatorController.getOne)

module.exports = router