const express= require("express")
const router = express.Router(); 
const Recent = require("./recentCourse.model")
const crudController = require("../../CrudController/crud.controller")

const recentController = crudController(Recent)
router.get("/",recentController.getAll)
router.get("/:id", recentController.getOne)

module.exports = router