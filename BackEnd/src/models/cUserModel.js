const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ape:ape1234@cluster0.ah8pdbs.mongodb.net/xerxes')
.then(()=>{console.log("Database connected")})
.catch((error)=>{console.log(error)})
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    }
}, {timestamps : true}
)

const cUser= mongoose.model('cUser',userSchema)
module.exports=cUser