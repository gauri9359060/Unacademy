const express= require("express")
const router = express.Router(); 
const Footer = require("./footer.model")
const crudController = require("../../CrudController/crud.controller")

const footerController = crudController(Footer)
router.get("/",footerController.getAll)
router.get("/:id", footerController.getOne)

module.exports = router