const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ape:ape1234@cluster0.ah8pdbs.mongodb.net/xerxes"
);
console.log('connected to contact db')
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const contact = mongoose.model("Contact", contactSchema);
module.exports = contact
