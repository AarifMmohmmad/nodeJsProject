const mongoose = require("mongoose");

const studentSchma = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
});

const studentModel = new mongoose.model("mnn", studentSchma);

module.exports = studentModel;
