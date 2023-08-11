const express = require("express");
const fs = require("fs");

studentdata = JSON.parse(fs.readFileSync("student.json", "utf-8"));

const app = express();
app.use(express.json()); // -----------------------
app.listen(4000, "localhost", (req, res) => {
  console.log("server will be start 4000");
});
//////////// get api
const getallStudents = (req, res) => {
  console.log(req.params);
  const responce = {
    status: "success",
    data: JSON.parse(JSON.stringify(studentdata)),
  };
  res.send(responce);
};
////////////
const creatSTudent = (req, res) => {
  let student = studentdata.filter((value) => {
    return value.id == req.body.id;
  });
  if (student.length >= 1) {
    res.send("student already exict");
  } else {
    studentdata.push(req.body);
    fs.writeFileSync("student.json", JSON.stringify(studentdata));
    res.status(200).send(req.body);
  }
  console.log("hiiihello");
};
const creatSTudents = (req, res) => {
  let student = studentdata.filter((value) => {
    return value.id == req.body.id;
  });
  if (student.length >= 1) {
    res.send("student already exict");
  } else {
    studentdata.push(req.body);
    fs.writeFileSync("student.json", JSON.stringify(studentdata));
    res.status(200).send(req.body);
  }
  console.log("hello hiii");
};
//////////////
const getstudentid = (req, res) => {
  let student = studentdata.filter((value) => {
    return value.id == req.params.id;
  });
  if (student.length < 1) {
    res.send({
      status: "failer",
      massge: "please give a valid id",
      data: [],
    });
  } else {
    const responce = {
      status: "success",
      data: JSON.parse(JSON.stringify(student)),
    };
    res.send(responce);
  }
};
///////////
function deletstudent(req, res) {
  let student = studentdata.filter((value) => {
    return value.id == req.params.id;
  });
  if (student.length == 0) {
    res.send({
      status: "failer",
      massge: "student not found in this  id",
      data: [],
    });
  } else {
    studentdata.splice(studentdata.indexOf(student[0]), 1);
    fs.writeFileSync("student.json", JSON.stringify(studentdata));
    res.send({
      status: "success",
      massge: "student successfully delet in given  id",
      data: student[0],
    });
  }
}
/////////////
function updatestudent(req, res) {
  let student = studentdata.filter((value) => {
    return value.id == req.params.id;
  });
  console.log(student);
  if (student.length > 0) {
    let index = studentdata.indexOf(student[0]);
    studentdata[index] = Object.assign(student[0], req.body);
    console.log(index, studentdata[index]);
    fs.writeFileSync("student.json", JSON.stringify(studentdata));
    res.send({
      status: "success",
      massge: "student successfully update in given  id",
      data: student,
    });
  } else {
    res.send({
      status: "failer",
      massge: "student not fount in given details",
      data: req.body,
    });
  }
}
/////////////
app.get("/students", getallStudents);
app.get("/studentss/:id", getstudentid);

app.post("/student", creatSTudent);
app.post("/student", creatSTudents);

app.delete("/student/:id", deletstudent);
app.put("/student/:id", updatestudent);
app.post("student");
