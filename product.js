const mongoose= require("mongoose");
const productSchema= new mongoose.Schema({
    name:String,
    brand:String,
    category:String
})

module.exports=mongoose.model("product",productSchema)