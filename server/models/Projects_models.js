// dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create a new Schema
const projectSchema = new Schema(
  {
    title: {
      type: string,
      required: true,
    },
    repo: {
      type: string,
      required: true,
    },
    clientFirstName: {
      type: string,
      required: false,
    },
    clientLastName: {
      type: string,
      required: false,
    },
    clientNumber: {
      type: number,
      required: false,
    },
    projectStartDate: {
      type: string,
      required: false,
    },
    projectEndDate: {
      type: string,
      required: false,
    },
    projectState: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

// exports schema
module.exports = mongoose.model("Projects", projectSchema);
