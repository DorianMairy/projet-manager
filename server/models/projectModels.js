// dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create a new Schema
const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
    clientFirstName: {
      type: String,
      required: false,
    },
    clientLastName: {
      type: String,
      required: false,
    },
    clientNumber: {
      type: Number,
      required: false,
    },
    projectStartDate: {
      type: String,
      required: false,
    },
    projectEndDate: {
      type: String,
      required: false,
    },
    projectState: {
      type: String,
      required: true,
    },
    img: {
      data: Buffer,
      contentType: String,
      required: false,
    },
  },
  { timestamps: true }
);

// exports schema
module.exports = mongoose.model("Projects", projectSchema);
