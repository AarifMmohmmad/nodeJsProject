const express = require("express");
const controller = require("../controllers/userControllers.js");

const studentRouter = express.Router();

studentRouter
  .route("/:id?")
  .post(controller.creat)
  .get(controller.getAlldata)
  .put(controller.userfind)
  .put(controller.update)
  .delete(controller.delet);

studentRouter
  .route("/bluk")
  .post(controller.creatBulk)
  .delete(controller.deletBulk);

module.exports = studentRouter;
