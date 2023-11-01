const express = require("express");
const app = express();

const {
  createUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");
const { createContact } = require("../controllers/contactController");

//router method

// app.get("/",cors(),(req,res)=>{

// })
//route for create
app.post("/user", createUser); //POST method for Create
app.post("/delete", deleteUser);
app.post("/login", loginUser);

module.exports = app;
