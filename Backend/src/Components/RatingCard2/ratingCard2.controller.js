const express = require("express")
const router = express.Router();
const RatingCard2 = require("./ratingCard2.model")
const crudController = require("../../CrudController/crud.controller")

const ratingCard2Controller = crudController(RatingCard2)
router.get("/", ratingCard2Controller.getAll)
router.get("/:id", ratingCard2Controller.getOne)

module.exports = router