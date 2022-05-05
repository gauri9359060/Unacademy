const express = require("express")
const router = express.Router();
const Best = require("./best.model")
const crudController = require("../../CrudController/crud.controller")
const bestController = crudController(Best)

router.post("/",bestController.post)
router.get("/",bestController.getAll)
router.get("/:id",bestController.getOne)
router.patch("/:id", bestController.update)

module.exports = router