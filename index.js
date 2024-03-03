const express = require('express');
const ConnectToDb = require('./Db/Connection');
const routes = require('./Router/routes');
const app = express();
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT || 4580;
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("This is the homepage")
})

app.use(cors({
    origin: "*"
}))

app.use("/data", routes)

const Connected = async()=>{
    try{
        await ConnectToDb(process.env.MONGO_URL)
        app.listen(PORT, ()=>{
            console.log(`Server is Running on ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

Connected()