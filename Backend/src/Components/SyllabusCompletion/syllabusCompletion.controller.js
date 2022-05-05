const express= require("express")
const router = express.Router(); 
const SlbsCmpltn = require("./syllabusCompletion.model")
const crudController = require("../../CrudController/crud.controller")

const slbsCmpltnController = crudController(SlbsCmpltn)
router.get("/",slbsCmpltnController.getAll)
router.get("/:id", slbsCmpltnController.getOne)

module.exports = router