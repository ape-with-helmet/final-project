const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ape:ape1234@cluster0.ah8pdbs.mongodb.net/xerxes')
    .then(() => { console.log("Database gg connected") })
    .catch((error) => { console.log(error) })
const cartSchema = new mongoose.Schema({
    product: {
        type:String,
        required:true,
    },
    amount:{
        type : Number,
        required : true,
    },
    id:{
        type : Number,
        required : true,
    }
}, { timestamps: true }
)

const cart = mongoose.model('Cart', cartSchema)
module.exports = cart