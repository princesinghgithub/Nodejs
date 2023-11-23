const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const Database='E-cloth';
const client = new MongoClient(url);


async function getData(){
    let result=await client.connect();
   let db= result.db(Database);
   let collection=db.collection("product");
   let response=await collection.find({}).toArray();
console.log(response);
}

getData();