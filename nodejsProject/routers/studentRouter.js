const express = require("express");
const controller = require("../controllers/studentControllers.js");
const authentication = require("../middleware/authentication.js");
const studentRouter = express.Router();

studentRouter
  .route("")
  .post(controller.creat)
  .get(controller.getAlldata)
  .put(authentication, controller.update)
  .delete(authentication, controller.delet);

studentRouter.route("/:id").get(authentication, controller.userfind);

studentRouter
  .route("/bluk")
  .post(controller.creatBulk)
  .delete(controller.deletBulk);

module.exports = studentRouter;
