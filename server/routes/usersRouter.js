// dependencies
const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

// GET all projects
router.get("/", getUsers);

// GET a single project
router.get("/:id", getUser);

// POST a new project
router.post("/", createUser);

// DELETE a new project
router.delete("/:id", deleteUser);

// UPDATE a new project
router.patch("/:id", updateUser);

module.exports = router;
