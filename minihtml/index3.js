const fs = require("fs")
const http = require("http")
const path = require("path")



const html = fs.readFileSync("main.html",{encoding :"utf-8"})
const studentHtml = fs.readFileSync("student.html",{encoding :"utf-8"})
const teacherHtml = fs.readFileSync("teacher.html",{encoding :"utf-8"})
const contactHtml = fs.readFileSync("contact.html",{encoding :"utf-8"})

const studentsData = JSON.parse( fs.readFileSync("student.txt", {encoding : "utf-8" }));
const teacherData = JSON.parse( fs.readFileSync("teacher.txt", {encoding : "utf-8" }));




http.createServer((req,res)=>{

  const pathname = req.url
  const urls = req.url.split("/")
  if(pathname.includes("/home")){
    res.write(html.replace("welcom wecode academy" , "home page"))
    res.end() 

  }else if(pathname.includes("/teacher")){

    if(urls[urls.length -1] ==="teacher" ){
      getAllTeachers(res)
    }else if(!isNaN(urls[urls.length -1])){
    let teacherIdData =  teacherData.filter((obj)=>obj.id == urls[urls.length-1] )
     res.end(JSON.stringify(teacherIdData))
    }else{
      res.end("teacher not found")
    }
    

  }else if(pathname.includes("/student")){
     
    if(urls[urls.length -1] ==="student" ){
      getAllStudents(res)
    }else if(!isNaN(urls[urls.length -1])){
    let studentIdData =  studentsData.filter((obj)=>obj.id ==urls[urls.length-1])
     res.end(JSON.stringify(studentIdData))
    }else{
      res.end("student not found")
    }
  }else if(pathname.includes("/contact")){
    res.end(html.replace("welcom wecode academy" ,contactHtml ))
  }else {
    res.write(html)
    res.end() 
  }
  
}).listen(8003,"localhost" , (req,res)=>{
    console.log("server start 3");
})


function getAllTeachers(res) {
  let rows = ""
  for (let teacher of teacherData) {
    let row = `
        <tr>
        <td>${teacher.id}</td>
        <td>${teacher.name}</td>
        <td>${teacher.mobile}</td>
        <td>${teacher.address}</td>
        <td><a href="/teacher/${teacher.id}" ><button style="height:20px ;">show_detail</a></td>
        </tr>`
    rows = rows.concat(row)
    
  }
  
  res.end(html.replace("welcom wecode academy", teacherHtml.replace("welcome", rows)))
}

function getAllStudents(res) {
  let rows = ""
  for (let student of studentsData) {
    let row = `
        <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.mobile}</td>
        <td>${student.address}</td>
        <td><a href="/student/${student.id}"><button style="height:20px ;">show_detail</a></td>

        </tr>`
    rows = rows.concat(row)
  }
  res.end(html.replace("welcom wecode academy", studentHtml.replace("welcome", rows)))
}

