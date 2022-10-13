// dependencies
const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
  getProject,
} = require("../controllers/ProjectController");

// GET all projects
router.get("/", getProjects);

// GET a single project
router.get("/:id", getProject);

// POST a new project
router.post("/", createProject);

// DELETE a new project
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a project" });
});

// UPDATE a new project
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a project" });
});

module.exports = router;
