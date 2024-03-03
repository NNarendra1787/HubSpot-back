const mongoose = require("mongoose");

const ChartData = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    send: {
        type: Number,
        required: true,
    },
    opened:{
        type: Number,
        required: true,
    },
    click: {
        type: Number,
        required: true,
    },
    clickedrate:{
        type: Number,
        required: true,
    }

})

const Charts = mongoose.model("Chart", ChartData)
module.exports = Charts;