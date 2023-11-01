const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ape:ape1234@cluster0.ah8pdbs.mongodb.net/xerxes')
const contactSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    gmail : {
        type : String,
        required : true,
    },
    subject : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    },
}, {timestamps : true}
)

const contact= mongoose.model('Contact',contaSchema)