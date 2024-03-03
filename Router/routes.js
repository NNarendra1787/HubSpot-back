const { ChartData, AddChart, findData } = require('../Controller/ChartCont');
const { RegisterUser, LoginUser } = require('../Controller/UserCont');

const routes = require('express').Router();

routes.get("/", (req, res)=>{
    res.send("This is the get request")
})

//Login and register requestes
routes.post("/register", RegisterUser)
routes.post("/login", LoginUser)


// Chart Routes
routes.post("/chartSend", ChartData)
routes.post("/dataSend", AddChart)
routes.get("/dataCheck", findData)
module.exports = routes;