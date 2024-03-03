const Charts = require("../Schema/ChartSchema")

const ChartData = async(req, res)=>{
    try{
        const data = req.body;
        const newData = await Charts.create(data);
        res.status(200).send({Chart: newData});
    }catch (e){
        res.status(500).send({err: e})
    }
}

const AddChart = async(req, res)=>{
   const data = req.body;
   const {id, send, click, opened, clickedrate} = data;

   const Result = await Charts.create({
    id, send, click, opened, clickedrate,
   })

   return res.send({meg: "User data has been Stored", Result: Result})
}

const findData = async(req, res)=>{
    const data = req.body;
    const result = await Charts.find();
    return res.send({Result: result})
}

module.exports = {
    ChartData, 
    findData,
    AddChart
}