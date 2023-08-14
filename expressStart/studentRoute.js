const express = require("express");
// const {getallStudents,Bulkstudent, updatestudentbluk,deletstudentbluk,creatSTudent,getstudentid,updatestudent,deletstudent,} = require("./studetncontroller.js");
const studetncontrollers = require("./studetncontroller.js");
let router = express.Router();
router
  .route("/students/:id?")
  .get(studetncontrollers.getallStudents)
  .post(studetncontrollers.Bulkstudent)
  .put(studetncontrollers.updatestudentbluk)
  .delete(studetncontrollers.deletstudentbluk);

router
  .route("/student/:id?")
  .get(studetncontrollers.getstudentid)
  .post(studetncontrollers.creatSTudent)
  .put(studetncontrollers.updatestudent)
  .delete(studetncontrollers.deletstudent);

//---------- in this use 3 prameters
// function test(req, res, next, id) {
//   next();
//   console.log("hello working", id);
// }
//---------- in this use 4 prameters
// function test(req, res, next, id) {
//   next();
//   console.log("hello working", id);
// }
// router.param("id", test);
module.exports = router;
//In summary, the main difference is that express().route() defines routes directly on the main application instance, while express.Router().route() defines routes on a router instance that can be mounted onto the main application or other routers. The choice between the two depends on how you want to organize your code and handle your routes.
// express().route()

// express.Router().route()
