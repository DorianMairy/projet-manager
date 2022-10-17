// dependencies
const express = require("express");
const router = express.Router();

// controllers functions
const { signupUser, loginUser } = require("../controllers/UserController");

// login routes
router.post("/login", loginUser);

// register routes
router.post("/signup", signupUser);

module.exports = router;
