// dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
require("dotenv").config();

//routes dependencies
const projectsRoutes = require("./routes/projectsRouter");
const userRoutes = require("./routes/userRouter");

// server configuration
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// midleware
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// routes
app.use("/api/projects", projectsRoutes);
app.use("/api/user", userRoutes);

// Database configuration
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// app configuration
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
