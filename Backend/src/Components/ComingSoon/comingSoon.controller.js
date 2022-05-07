const express = require("express")
const router = express.Router();
const ComingSoon = require("./comingSoon.model")
const crudController = require("../../CrudController/crud.controller")
const comingSoonController = crudController(ComingSoon)

router.post("/",comingSoonController.post)
router.get("/",comingSoonController.getAll)
router.get("/:id",comingSoonController.getOne)
router.patch("/:id", comingSoonController.update)

module.exports = router