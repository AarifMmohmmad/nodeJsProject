const express = require("express");
const cret = require("./testcontroller");

rout = express.Router();
rout.route("/hii").post(cret);

module.exports = rout;
