const mongoose = require('mongoose');


module.exports = mongoose.model('User',
 { email:{         
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true}, 
    password:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }, 
    otp: Number });