
// create item
const CreateOne = (model)=> async(req,res)=>{
    try{
        let createdItem = await model.create(req.body)
      
        res.status(201).json(createdItem)
    }
    catch(e){
        console.log(e.message)
    }
}
// read all item
const getAll=(model)=> async (req, res) => {
    let items = await model.find({})
    console.log(items)
    res.status(200).json(items);
}
// read one item
const getOne =(model)=> async(req,res)=>{
    let item =await model.findById(req.params.id);
    res.status(200).json(item);
};
 
// Update item
const updateOne=(model)=> async (req,res)=>{
    let updatedItem = await model.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
        );
    res.status(200).json(updatedItem); 
}
// delete Item
const deleteOne = (model)=>async (req,res)=>{
    const deletedItem = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedItem);
}
module.exports = (model)=>({
    post:CreateOne(model),
    getAll : getAll(model),
    getOne : getOne(model),
    update: updateOne(model),
    delete: deleteOne(model)
});