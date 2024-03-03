const { default: mongoose } = require('mongoose')
const Mongoose = require('mongoose')

const ConnectToDb = async(uri)=>{
    await mongoose.connect((uri))
    .then(()=> console.log("SuccessFully Connect to Databse😃😃"))
    .catch((e)=>console.log(e))
}

module.exports = ConnectToDb;