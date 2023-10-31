const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true,
    },
    lname : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    mobile : {
        type : Number,
        required : true,
    },
}, {timestamps : true}
)

module.exports = mongoose.model('User',userSchema)