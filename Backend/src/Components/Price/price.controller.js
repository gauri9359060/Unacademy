const express= require("express")
const router = express.Router(); 
const Price = require("./price.model")
const crudController = require("../../CrudController/crud.controller")

const priceController = crudController(Price)
router.get("/",priceController.getAll)
router.get("/:id", priceController.getOne)

module.exports = router