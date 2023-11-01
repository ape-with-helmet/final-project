const express = require("express");
const router = express.Router();

const {
  createUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");
const { createContact } = require("../controllers/contactController");

//router method
router.get("/", (req, res) => {
  res.send("Router method !!");
});
//route for create
router.post("/user", createUser); //POST method for Create
router.post("/delete", deleteUser);
router.post("/login", loginUser);
router.post("/contact", createContact);

module.exports = router;
