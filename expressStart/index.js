const express = require("express");
const router = require("./studentRoute.js");
const morgan = require("morgan");
const dotenv = require("dotenv");

const rout = require("./testRouter.js");

const mongoconncetion = require("./db.js");
// bs require krte hi connection ho jayga
const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(express.static("public"));

dotenv.config({ path: "config.env" });

app.use("", router);
app.use("", rout);
app.listen(4000, "localhost", (req, res) => {
  console.log("server will be start 4000");
});

// console.log(process.env.myname);

// console.log(app.get("env")); // check krta he ki kam kis pr he  {development}
//

//

// ////////////////////////////////////////////////////////////////////////////
// //////////// get api
// // ab hm ese or modifiy krnge or jo code hmne yha likha he vo hm ak controller me likhnge jo hmare router se conncet hoga
// const getallStudents = (req, res) => {
//   console.log(req.params);
//   const responce = {
//     status: "success",
//     data: JSON.parse(JSON.stringify(studentdata)),
//   };
//   res.send(responce);
// };

// const getstudentid = (req, res) => {
//   let student = studentdata.filter((value) => {
//     return value.id == req.params.id;
//   });
//   if (student.length < 1) {
//     res.send({
//       status: "failer",
//       massge: "please give a valid id",
//       data: [],
//     });
//   } else {
//     const responce = {
//       status: "success",
//       data: JSON.parse(JSON.stringify(student)),
//     };
//     res.send(responce);
//   }
// };

// ////////////////////////////////////////////////////////////////////////////

// // all data inserted with new id genreted not check ki this data is already exict project wil be update in some time and check them
// const creatSTudent = (req, res) => {
//   let student = req.body;
//   let id = studentdata[studentdata.length - 1].id + 1;
//   student = Object.assign({ id: id }, student);
//   studentdata.push(student);
//   fs.writeFileSync("student.json", JSON.stringify(studentdata));
//   res.status(200).send(student);
// };

// const Bulkstudent = (req, res) => {
//   responce = [];
//   let students = req.body;
//   students.forEach((student) => {
//     let id = studentdata[studentdata.length - 1].id + 1;
//     student = Object.assign({ id: id }, student);
//     studentdata.push(student);
//     fs.writeFileSync("student.json", JSON.stringify(studentdata));
//     responce.push({
//       status: "success",
//       massge: " succeess fully add data ",
//       data: student,
//     });
//   });
//   res.send(responce);
// };

// ////////////////////////////////////////////////////////////////////////////
// function deletstudent(req, res) {
//   let student = studentdata.filter((value) => {
//     return value.id == req.params.id;
//   });
//   if (student.length == 0) {
//     res.send({
//       status: "failer",
//       massge: "student not found in this  id",
//       data: [],
//     });
//   } else {
//     studentdata.splice(studentdata.indexOf(student[0]), 1);
//     fs.writeFileSync("student.json", JSON.stringify(studentdata));
//     res.send({
//       status: "success",
//       massge: "student successfully delet in given  id",
//       data: student[0],
//     });
//   }
// }

// function deletstudentbluk(req, res) {
//   id = JSON.parse(req.params.id);
//   responce = [];
//   id.forEach((id) => {
//     let student = studentdata.find((student) => {
//       return student.id == id;
//     });
//     if (student) {
//       studentdata.splice(studentdata.indexOf(student), 1);
//       fs.writeFileSync("student.json", JSON.stringify(studentdata));
//       responce.push({
//         status: "success",
//         massge: "student successfully delet in given  id",
//         data: student,
//       });
//     } else {
//       responce.push({
//         status: "failler",
//         massge: "student not fount in given  id",
//         data: id,
//       });
//     }
//   });
//   res.send(responce);
// }
// ////////////////////////////////////////////////////////////////////////////
// function updatestudent(req, res) {
//   let student = studentdata.filter((value) => {
//     return value.id == req.params.id;
//   });
//   console.log(student);
//   if (student.length > 0) {
//     let index = studentdata.indexOf(student[0]);
//     studentdata[index] = Object.assign(student[0], req.body);
//     console.log(index, studentdata[index]);
//     fs.writeFileSync("student.json", JSON.stringify(studentdata));
//     res.send({
//       status: "success",
//       massge: "student successfully update in given  id",
//       data: student,
//     });
//   } else {
//     res.send({
//       status: "failer",
//       massge: "student not fount in given details",
//       data: req.body,
//     });
//   }
// }

// function updatestudentbluk(req, res) {
//   let students = req.body;
//   let responce = [];
//   students.forEach((person) => {
//     let student = studentdata.filter((value) => {
//       return value.id == person.id;
//     });
//     if (student.length > 0) {
//       let index = studentdata.indexOf(student[0]);
//       studentdata[index] = Object.assign(student[0], person);
//       fs.writeFileSync("student.json", JSON.stringify(studentdata));
//       responce.push({
//         status: "success",
//         massge: "student successfully update in given  id",
//         data: student,
//       });
//       console.log(responce);
//     } else {
//       responce.push({
//         status: "failer",
//         massge: "student not fount in given details",
//         data: person,
//       });
//     }
//   });
//   res.send(responce);
//   console.log(responce);
// }
////////////////////////////////////////////////////////////////////

// starting a express
// app.get("/student/:id", getstudentid);
// app.get("/students", getallStudents);

// app.post("/student", creatSTudent);
// app.post("/students", Bulkstudent);

// app.delete("/student/:id", deletstudent);
// app.delete("/students/:id", deletstudentbluk);

// app.put("/student/:id", updatestudent);
// app.put("/students", updatestudentbluk);

////////////////////////////////////////////////////////////////////////////

// starting a appi call with route function

//advance trike se krnge ab with new file

// app
//   .route("/students/:id?")
//   .get(getallStudents)
//   .post(Bulkstudent)
//   .put(updatestudentbluk)
//   .delete(deletstudentbluk);

// app
//   .route("/student/:id?")
//   .get(getstudentid)
//   .post(creatSTudent)
//   .put(updatestudent)
//   .delete(deletstudent);
