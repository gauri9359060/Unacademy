const express = require("express")
const router = express.Router();
const Card = require("./card.model")
const crudController = require("../../CrudController/crud.controller")
const cardController = crudController(Card)

router.post("/",cardController.post)
router.get("/",cardController.getAll)
router.get("/:id",cardController.getOne)

module.exports = router