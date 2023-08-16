const mongoose = require("mongoose");

const studentSchma = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  batch: {
    type: String,
    required: true,
    default: "javaScript",
  },
});

const Student = mongoose.model("student", studentSchma, "student");

module.exports = Student;
