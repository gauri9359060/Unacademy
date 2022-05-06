const express= require("express")
const router = express.Router(); 
const Price = require("./price.model")
const crudController = require("../../CrudController/crud.controller")

const priceController = crudController(Price)
router.get("/:id", priceController.getOne)
router.get("/",async(req,res)=>{
        let type = req.query.type
        const criteria={}
        if(type){
            criteria.type = type
        }
    const data = await Price.find(criteria).sort({ "months": 1 }).limit(4)
        res.status(200).json(data);

})
module.exports = router