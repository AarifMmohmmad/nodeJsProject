const teacher = []
const fs = require("fs")
module.exports =function teacherApihendler(req,resp){
    const method=req.method
    const pathname = req.url
    let userId =   req.url.split("/")
        userId =userId[userId.length-1]
        console.log(userId);
        function check(id){
            return  teacher.filter((obj)=>obj.id==id)
          }
if(method == "POST" && pathname == "/api/v1/teacher"){
    BOdyGetData(req)
    req.on("end",()=>{
        let {name , mobile, email, id,subject} = JSON.parse(body)
       if(!name || !mobile||!email||!subject ||!id){
        resp.write("please given valid impormation")
        resp.end()
       }else if(check(id) && check(id).length >0){
        resp.write("teacher alreaddy exict")
        resp.end()
       }else{
        teacher.push(JSON.parse(body))
        fs.writeFileSync("teacher.js",JSON.stringify(teacher))
        resp.write("teacher successfully created")
        resp.end()
       }
       
    })
}else if(method =="GET" && ( pathname == "/api/v1/teacher" ||  pathname == `/api/v1/teacher/${userId}`)){
  console.log(!isNaN(userId),userId,check(userId));
    if(!isNaN(userId)){
  if(check(userId)){
    resp.write(JSON.stringify(check(userId)[0]))
    resp.end()
  }else{
    resp.write("student not found")
  }
}else if(pathname == "/api/v1/teacher"){
    resp.write(JSON.stringify(teacher))
    resp.end()
}else if(method =="PUT" &&pathname == `/api/v1/teacher/${userId}`){
    resp.write("api abhi bnay nhi he ")
    resp.end()
}else if(method =="DELET" &&pathname == `/api/v1/teacher/${userId}`){
    resp.write("api abhi bnay nhi he ")
    resp.end()
   
}else{
    resp.write(`error ${pathname}`)
}

}else{
    resp.write(`api not found ${pathname}`)
    resp.end()
}
}

function BOdyGetData(req) {
    req.on("data", (chunk) => {
        body = ""
        body += chunk
    })
}

