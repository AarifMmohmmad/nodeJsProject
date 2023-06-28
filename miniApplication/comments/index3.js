const fs = require("fs")
const http = require("http");

const readdata = fs.readFileSync("teacher.txt", {encoding : "utf-8"});
const data = JSON.parse(readdata)  // string convert to json 
const convertaraay = [...data]     // json converd to aary 

const readdata2 = fs.readFileSync("student.txt", {encoding : "utf-8" });
const data2 = JSON.parse(readdata2)
const convertaraay2 = [...data2]  



const server = http.createServer((req, resp)=>{
  const urlsplit = req.url.split("/") 
  if(req.url.includes("teacher")){
    //   let recivedata =[]; 
    if( typeof+urlsplit[urlsplit.length-1] == "number" && (+urlsplit[urlsplit.length-1])){
    //    for(let value of convertaraay){
    //       if(value.id==urlsplit[urlsplit.length-1]){
    //         recivedata.push(value) 
    //       }
    //    }
   let recivedata =  convertaraay.filter((obj)=>obj.id == urlsplit[urlsplit.length-1] )
    
          resp.writeHead(200)
          resp.write(JSON.stringify( recivedata))
    }else if(urlsplit[urlsplit.length-1] === "teacher") {
             resp.writeHead(200)
             resp.write(JSON.stringify(data))     // json convert to string

    }else{
      resp.writeHead(404)
      resp.write("api not found")
    }
  }else if(req.url.includes("student")){
    let recivedata2 =[]; 
  if( typeof+urlsplit[urlsplit.length-1] == "number" && (+urlsplit[urlsplit.length-1])){
     for(let obj of convertaraay2){
        if(obj.id==urlsplit[urlsplit.length-1]){
          recivedata2.push(obj) 
        }
     }
        resp.writeHead(200)
        resp.write(JSON.stringify( recivedata2))
  }else if(urlsplit[urlsplit.length-1] === "student") {
           resp.writeHead(200)
           resp.write(JSON.stringify(data2))
  }else{
    resp.writeHead(404)
    resp.write("api not found")
    }
  }else{
  resp.writeHead(500)
  resp.write("internal server error")
  }
  resp.end()
})
server.listen(4841, "localhost",()=>{
    console.log("server start")
});



