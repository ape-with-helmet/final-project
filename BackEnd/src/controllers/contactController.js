const contactModel = require("../models/contactModel");
const { validEmail } = require("../validations/userValidation");

const createContact = async function (req, res) {
  try {
    let contact = req.body;
    let { name, email, subject, message } = contact;
    if (!name || !email || !subject || !message) {
      return res.send({ message: "Please provide all information !" });
    }
    let valEmail = validEmail(email);
    if (!valEmail) {
      return res.status(500).send({ message: "please enter valid email: " });
    }
    let createContact = await contactModel.create(contact);
    return res.send({ message: createContact });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createContact };