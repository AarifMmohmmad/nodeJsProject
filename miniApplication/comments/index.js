const fs = require("fs")
const http = require("http");

const readdata = fs.readFileSync("teacher.txt", {encoding : "utf-8" });
const cleanedString = readdata.replace(/\s/g, '');
const Teacherdata = JSON.parse(cleanedString)

// const readdata2 = fs.readFileSync("student.txt", {encoding : "utf-8" });
// const cleanedString2 = readdata2.replace(/\s/g, '');
// const studentData = JSON.parse(cleanedString2)

const server = http.createServer((req, resp)=>{
      console.log(req.url);
      
        if(req.url.includes("teacher")){
          const urlSplit = req.url.split("/");
          let teachers;
          const lengthOfData = Teacherdata.length;
              for(let i = 0; i < lengthOfData; i++){
                  if(urlSplit[urlSplit.length-1] == i){
                    resp.writeHead(200)
                    teachers= JSON.stringify(Teacherdata[i])
                  break;
                }
      }
      if(teachers){
        resp.writeHead(200) 
        resp.end(teachers)
      }else{
        resp.writeHead(404);
        resp.end();
      }
      resp.writeHead(200)
      resp.end(JSON.stringify(Teacherdata)); 
    }

    
//   else if(req.url.includes("student")){
//     const urlSplit = req.url.split("/");
//     const lengthOfData = studentData.length;
//         for(let i = 0; i < lengthOfData; i++){
//             if(urlSplit[urlSplit.length-1] == i){
//             resp.end(JSON.stringify(studentData[i]));
//             break;
//           }
// }
// resp.writeHead(200)
// resp.end(JSON.stringify(studentData)); 
// }
});
server.listen(8004, "localhost",()=>{
    console.log("Success")
});

