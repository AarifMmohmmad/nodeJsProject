const fs = require("fs")
const http = require("http");
const readdata = fs.readFileSync("teacher.txt", {encoding : "utf-8"});
const data = JSON.parse(readdata)  
const readdata2 = fs.readFileSync("student.txt", {encoding : "utf-8" });
const data2 = JSON.parse(readdata2)
const server = http.createServer((req, resp)=>{
  try {
  const urlsplit = req.url.split("/") 
  if(req.url.includes("teacher")){   
    if( typeof+urlsplit[urlsplit.length-1] == "number" && (+urlsplit[urlsplit.length-1]) && data.length >= (+urlsplit[urlsplit.length-1])){
      let recivedata =  data.filter((obj)=>obj.id == urlsplit[urlsplit.length-1] )
          resp.writeHead(200)
          resp.write(JSON.stringify( recivedata))
    }else if(urlsplit[urlsplit.length-1] === "teacher") {
             resp.writeHead(200)
             resp.write(JSON.stringify(data))   
    }else{
      resp.writeHead(404)
      resp.write("api not found")
    }
  }else if(req.url.includes("student")){
  if( typeof+urlsplit[urlsplit.length-1] == "number" && (+urlsplit[urlsplit.length-1]) && data2.length >= (+urlsplit[urlsplit.length-1])){
    let recivedata2 =  data2.filter((obj)=>obj.id == urlsplit[urlsplit.length-1] )
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
} catch (error) {
    console.log(error);
}
})


server.listen(8001, "localhost",()=>{
    console.log("server will be start")
});

