// dependencies
const express = require("express");
const router = express.Router();
const Projects = require("../models/projectsModels");

// GET all projects
router.get("/", (req, res, next) => {
  res.json({ message: "GET all projects" });
});

// GET a single project
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single project" });
});

// POST a new project
router.post("/", async (req, res) => {
  const {
    title,
    description,
    repo,
    clientFirstName,
    clientLastName,
    clientNumber,
    projectStartDate,
    projectEndDate,
    projectState,
  } = req.body;
  try {
    const project = await Projects.create({
      title,
      description,
      repo,
      clientFirstName,
      clientLastName,
      clientNumber,
      projectStartDate,
      projectEndDate,
      projectState,
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
