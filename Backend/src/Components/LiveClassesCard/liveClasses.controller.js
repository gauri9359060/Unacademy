const express= require("express")
const router = express.Router(); 
const Liveclass = require("./liveclasses.model")
const crudController = require("../../CrudController/crud.controller")

const liveclassController = crudController(Liveclass)
router.get("/",liveclassController.getAll)
router.get("/:id", liveclassController.getOne)
router.post("/",liveclassController.post)

module.exports = router