const mongoose = require('mongoose')

const userDetails = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, "Minmum 3 charecter required"],
        maxLength: [60, "Maximum 15 Charecter Required"],
    },
    email:{
        type: String,
        required: true, 
    },
    website: {
        type: String,
        required: [true, "Domain Name Required"]
    },
    password: {
        type: String,
        required: true
    }
})

const Users = mongoose.model('userData', userDetails);

module.exports = Users;