const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ape:ape1234@cluster0.ah8pdbs.mongodb.net/xerxes')
    .then(() => { console.log("Product Database Connected") })
    .catch((error) => { console.log(error) })
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
    }
}, { timestamps: true }
)

const pData = mongoose.model('products', userSchema)
module.exports = pData