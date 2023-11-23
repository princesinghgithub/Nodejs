// const express = require('express')
// const app = express();
// const reqFilter=require('./middleware')
// // app.use(reqFilter);
// app.get('',  reqFilter,(req, res) => {
//     console.log('request data ', req.query)
//     res.send('bsjjbj');
// })
// app.get('/contact',reqFilter, (req, res) => {
//     res.send("console error")
// })
// app.listen(5000);
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const Database='E-cloth';
// const client = new MongoClient(url);


// async function getData(){
//     let result=await client.connect();
//    let db= result.db(Database);
//    let collection=db.collection("product");
//    let response=await collection.find({}).toArray();
// console.log(response);
// }

// getData();


// const mongoose=require('mongoose');

// const main= async ()=>{
// await mongoose.connect('mongodb://127.0.0.1:27017/E-cloth');
// const productSchema=new mongoose.Schema({
//     name:String,
//     brand:String,
//     price:Number
// });
// const ProductModel=mongoose.model('product',productSchema);
// let data= new ProductModel({name:'m8',brand:"samsung",price:3000});
// let result=await data.save();
// console.log(result)
// }
// main();

// const updateDB= async()=>{
//     const Product = mongoose.model('product',productSchema);
//     let data= await Product.updateOne(
//         {name:"m8"},

//         {
//             $set: { price: 4999}
//         }
//     )
//     console.log(data)

// }
// updateDB();


// const deleteDB= async()=>{
//     const Product = mongoose.model('product',productSchema);
//     let data= await Product.deleteOne({brand:"samsung"})
//     console.log(data);

// }
// deleteDB();

// const findDB= async()=>{
//     const Product = mongoose.model('product',productSchema);
//     let data= await Product.find()
//     console.log(data);

// }
// findDB();

const express = require('express');
require('./config');
const product = require('./product');

const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    // console.log(req.body)
    res.send(result);
})

app.get("/list",async(req,res)=>{
let data= await product.find();
res.send(data);

})
app.delete("/delete/:_id",async(req,res)=>{
    let data= await product.deleteOne(req.params);
    console.log(req.params);
    res.send(data);
    
    })
    app.put("/update/:_id",async(req,res)=>{
        let data= await product.updateOne(
            req.params,
            {
                $set:req.body
            }
        );
        console.log(req.params);
        res.send(data);
        
        })
app.listen(5000);