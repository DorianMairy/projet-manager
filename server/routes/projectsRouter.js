// dependencies
const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
  getProject,
  deleteProject,
  updateProject,
} = require("../controllers/ProjectController");

// GET all projects
router.get("/", getProjects);

// GET a single project
router.get("/:id", getProject);

// POST a new project
router.post("/", createProject);

// DELETE a new project
router.delete("/:id", deleteProject);

// UPDATE a new project
router.patch("/:id", updateProject);

module.exports = router;
