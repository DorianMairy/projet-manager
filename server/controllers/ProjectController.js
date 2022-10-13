// dependencies
const Projects = require("../models/projectModels");
const mongoose = require("mongoose");

// GET all projects
const getProjects = async (req, res) => {
  const projects = await Projects.find({}).sort({ createdAt: -1 });

  res.status(200).json(projects);
};

// GET a single project
const getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid project id" });
  }

  const project = await Projects.findById(id);

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.status(200).json(project);
};

// CREATE a new project
const createProject = async (req, res) => {
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
  // add doc to db
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
};

// DELETE a single project

// UPDATE a single project

module.exports = {
  getProjects,
  getProject,
  createProject,
};
