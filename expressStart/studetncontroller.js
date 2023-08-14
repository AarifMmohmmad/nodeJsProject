const fs = require("fs");
studentdata = JSON.parse(fs.readFileSync("student.json", "utf-8"));

const getallStudents = (req, res) => {
  console.log(req.params.id);
  let id = JSON.parse(req.params.id);
  let responce = [];
  if (id) {
    id.forEach((id) => {
      let student = studentdata.find((student) => {
        return student.id == id;
      });
      if (student) {
        responce.push({
          status: "success",
          massge: " succeess fully add data ",
          data: student,
        });
      } else {
        responce.push({
          status: "failer",
          massge: "stydent not found in this id",
          data: student,
        });
      }
    });
    res.send(responce);
  } else {
    const responce = {
      status: "success",
      data: JSON.parse(JSON.stringify(studentdata)),
    };
    res.send(responce);
  }
};
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
////////////////
const creatSTudent = (req, res) => {
  let student = req.body;
  let id = studentdata[studentdata.length - 1].id + 1;
  student = Object.assign({ id: id }, student);
  studentdata.push(student);
  fs.writeFileSync("student.json", JSON.stringify(studentdata));
  res.status(200).send(student);
};

const Bulkstudent = (req, res) => {
  responce = [];
  let students = req.body;
  students.forEach((student) => {
    let id = studentdata[studentdata.length - 1].id + 1;
    student = Object.assign({ id: id }, student);
    studentdata.push(student);
    fs.writeFileSync("student.json", JSON.stringify(studentdata));
    responce.push({
      status: "success",
      massge: " succeess fully add data ",
      data: student,
    });
  });
  res.send(responce);
};

////////////////////////////////////////////////////////////////////////////
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

function deletstudentbluk(req, res) {
  id = JSON.parse(req.params.id);
  responce = [];
  id.forEach((id) => {
    let student = studentdata.find((student) => {
      return student.id == id;
    });
    if (student) {
      studentdata.splice(studentdata.indexOf(student), 1);
      fs.writeFileSync("student.json", JSON.stringify(studentdata));
      responce.push({
        status: "success",
        massge: "student successfully delet in given  id",
        data: student,
      });
    } else {
      responce.push({
        status: "failler",
        massge: "student not fount in given  id",
        data: id,
      });
    }
  });
  res.send(responce);
}
////////////////////////////////////////////////////////////////////////////
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

function updatestudentbluk(req, res) {
  let students = req.body;
  let responce = [];
  students.forEach((person) => {
    let student = studentdata.filter((value) => {
      return value.id == person.id;
    });
    if (student.length > 0) {
      let index = studentdata.indexOf(student[0]);
      studentdata[index] = Object.assign(student[0], person);
      fs.writeFileSync("student.json", JSON.stringify(studentdata));
      responce.push({
        status: "success",
        massge: "student successfully update in given  id",
        data: student,
      });
      console.log(responce);
    } else {
      responce.push({
        status: "failer",
        massge: "student not fount in given details",
        data: person,
      });
    }
  });
  res.send(responce);
  console.log(responce);
}

module.exports = {
  creatSTudent,
  Bulkstudent,
  getallStudents,
  getstudentid,
  deletstudent,
  deletstudentbluk,
  updatestudent,
  updatestudentbluk,
};
