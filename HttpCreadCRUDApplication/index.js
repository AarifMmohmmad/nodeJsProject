const studentApiHandler = require("./studentapi.js")
const teacherApihendler = require("./teacherApi.js")
const url = require("url");
const http = require("http");
const PORT = 3000;
const IP = "localhost";



const server = http.createServer((req, resp) => {
  let { pathname } = url.parse(req.url, true);
  if(pathname.includes("/student")){
   studentApiHandler(req, resp);
  }
  if(pathname.includes("/teacher")){
    teacherApihendler(req,resp)
  }
  
});
server.listen(PORT, IP, () => {
  console.log(`Server started at port : ${PORT} and IP : ${IP}`);
});


