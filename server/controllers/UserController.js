// dependencies
const Users = require("../models/userModels");
const mongoose = require("mongoose");

// GET all Users
const getUsers = async (req, res) => {
  const users = await Users.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

// GET a single Users
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid project id" });
  }

  const user = await Users.findById(id);

  if (!user) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.status(200).json(user);
};

// CREATE a new project
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  // add doc to db
  try {
    const user = await Users.create({
      name,
      email,
      password,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a single project
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid project id" });
  }
  const user = await Users.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "Project not found" });
  }
  res.status(200).json(user);
};

// UPDATE a single project
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid project id" });
  }
  const user = await Users.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({ error: "Project not found" });
  }
  res.status(200).json(user);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
