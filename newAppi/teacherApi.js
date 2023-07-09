module.exports =function teacherApihendler(req,resp){
    const method=req.method
    const pathname = req.url
    console.log("hiii",method,pathname);
if(method == "POST" && pathname == "/api/v1/teacher"){
    req.on("data",(chunk)=>{
        body = ""
        body +=chunk
    })
    req.on("end",()=>{
        let id = Math.ceil(Math.random()*10)
        let {name , mobile,  email, subject} = JSON.parse(body)
          
    

    })
}

}