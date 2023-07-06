/** Imported Required Modules */
const fs = require("fs");
const http = require("http");

//Constants Declaration
const TEACHER = "teacher";
const STUDENT = "student";
const PORT = 8001;
const IP = "localhost";
const SUCCESS = 200;
const NOT_FOUND = 404;
const NOT_FOUND_MESSAGE = "NOT FOUND";

//Reading File Data
const teachersData = readTeachersData();
const studentsData = readStudentsData();

//Creating Server
const server = http.createServer((req, resp) => {
  const urls = req.url.split("/");
  if (req.url.includes(TEACHER)) {
    handleTeacherRequests(urls, resp);
  } else if (req.url.includes(STUDENT)) {
    handleStudentsRequests(urls, resp);
  } else {
    resp.writeHead(NOT_FOUND);
    resp.write(NOT_FOUND_MESSAGE);
  }
  resp.end();
});
server.listen(PORT, IP, () => {
  console.log("Server started");
});




function handleStudentsRequests(urls, resp) {
  if (!isNaN(urls[urls.length - 1]) ) {
    let students = studentsData.filter(
      (student) => student.id == urls[urls.length - 1]
    );
    if(JSON.stringify(students)  === JSON.stringify([]) ){
      resp.writeHead(NOT_FOUND);
      resp.write(`${STUDENT} ${NOT_FOUND_MESSAGE}` );
    }
    resp.writeHead(SUCCESS);
    resp.write(JSON.stringify(students));
  } else if (urls[urls.length - 1] === STUDENT) {
    resp.writeHead(SUCCESS);
    resp.write(JSON.stringify(studentsData));
  } else {
    resp.writeHead(NOT_FOUND);
    resp.write(`${STUDENT} ${NOT_FOUND_MESSAGE}`);
  }
}

function handleTeacherRequests(urls, resp) {
  if (!isNaN(urls[urls.length - 1])) {
    let teachers = teachersData.filter(
      (teacher) => teacher.id == urls[urls.length - 1]
    );
    if(JSON.stringify(teachers)  === JSON.stringify([]) ){
      resp.writeHead(NOT_FOUND);
      resp.write(`${TEACHER} ${NOT_FOUND_MESSAGE}` );
    }
    resp.writeHead(SUCCESS);
    resp.write(JSON.stringify(teachers));
  } else if (urls[urls.length - 1] === TEACHER) {
    resp.writeHead(SUCCESS);
    resp.write(JSON.stringify(teachersData));
  } else {
    resp.writeHead(NOT_FOUND);
    resp.write(`${TEACHER} ${NOT_FOUND_MESSAGE}`);
  }
}

function readTeachersData() {
  return JSON.parse(
    fs.readFileSync("teacher.txt", {
      encoding: "utf-8",
    })
  );
}

function readStudentsData() {
  return JSON.parse(fs.readFileSync("student.txt", { encoding: "utf-8" }));
}

