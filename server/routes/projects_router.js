// dependencies
const express = require("express");

const router = express.Router();

// GET all projects
router.get("/", (req, res, next) => {
  res.json({ message: "GET all projects" });
});

// GET a single project
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single project" });
});

// POST a new project
router.post("/", (req, res) => {
  res.json({ message: "POST a new project" });
});

// DELETE a new project
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a project" });
});

// UPDATE a new project
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a project" });
});

module.exports = router;
