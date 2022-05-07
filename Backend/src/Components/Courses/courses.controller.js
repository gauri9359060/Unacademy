const express = require("express")
const router = express.Router();
const Course = require("./courses.model")
const crudController = require("../../CrudController/crud.controller")
const courseController = crudController(Course)

router.post("/",courseController.post)
router.get("/",courseController.getAll)
router.get("/:id",courseController.getOne)
router.patch("/:id", courseController.update)

module.exports = router