// mongosh ke liy testin

const mongoose = require("mongoose");
const student = require("./schma.js");

const creat = async (req, res) => {
  data = req.body;
  const stu = new student(data);
  stu.save();
};

module.exports = creat;
