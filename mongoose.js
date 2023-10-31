const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ape:ape1234@cluster0.ah8pdbs.mongodb.net/xerxes")
.then(()=>{
    console.log("Connected")
})
.catch(()=>{
    console.log("failed")
})
const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("userInfo",newSchema)