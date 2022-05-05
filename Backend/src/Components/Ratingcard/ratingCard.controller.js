const express= require("express")
const router = express.Router(); 
const RatingCard = require("./ratingCard.model")
const crudController = require("../../CrudController/crud.controller")

const ratingCardController = crudController(RatingCard)
router.get("/",ratingCardController.getAll)
router.get("/:id", ratingCardController.getOne)

module.exports = router