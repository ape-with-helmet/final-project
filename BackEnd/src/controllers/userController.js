const userModel = require("../models/userModel");
const {
  validEmail,
  validPassword,
  validMobile,
} = require("../validations/userValidation");
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
  try {
    let user = req.body;
    let { email, password, mobile } = user;
    if (!email || !password || !mobile) {
      return res.send({ message: "Please provide all information !" });
    }
    let valEmail = validEmail(email);
    if (!valEmail) {
      return res.status(500).send({ message: "please enter valid email: " });
    }
    let valPass = validPassword(password);
    if (!valPass) {
      return res.status(500).send({ message: "please enter valid password: " });
    }
    let valMob = validMobile(mobile);
    if (!valMob) {
      return res
        .status(500)
        .send({ message: "please enter valid mobile number: " });
    }

    //unique validation
    let uniqueEmail = await userModel.findOne({ email });
    if (uniqueEmail) {
      return res.send({ message: "Email already exists!" });
    }
    let uniquePhone = await userModel.findOne({ mobile });
    if (uniquePhone) {
      return res.send({ message: "Phone already exists!" });
    }
    let createUs = await userModel.create(user);
    return res.send({ message: createUs });
  } catch (err) {
    console.log(err);
  }
};

//delete API
const deleteUser = async function (req, res) {
  try {
    let user = req.body;
    let { email, password } = user;
    if (!email || !password) {
      return res.send({ message: "Please provide all information !" });
    }
    //unique validation
    let uniqueEmail = await userModel.findOne({ email });
    if (!uniqueEmail) {
      return res.send({ message: "Email does not exist!" });
    }
    let deleteUs = await userModel.deleteOne(user);
    return res.send({ message: deleteUs });
  } catch (err) {
    console.log(err);
  }
};

//login api
let loginUser = async (req, res) => {
  try {
    let data = req.body;
    let { email, password } = data;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide all information !" });
    }
    let matchUser = await userModel.findOne({ email, password });
    if (!matchUser) {
      return res.status(200).send({ message: "User not Registered" }); //200 is the error code for "Working".
    }
    const token = jwt.sign(
      {
        userId: matchUser._id.toString(),
      },
      "mernStack",
      {
        expiresIn: "12000sec",
      }
    );
    return res
      .status(200)
      .send({
        status: true,
        message: "User Logged in Successfully",
        data: token,
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, message: "Internal Server error!" });
  }
};
module.exports = { createUser, deleteUser, loginUser };
