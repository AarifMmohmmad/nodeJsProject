const t = require("./student.js")
console.log(t);
console.log( mno= t.push({"id" : 1,"name" : "khan"}));
console.log(mno);
console.log(t);
const http = require("http")

const port =3003
const IP = "localHost"

const server = http.createServer((req,res)=>{

}).listen(port,IP,()=>{
    console.log(`server will be start in port no. ${port} and Ip ${IP}`);
})



/*
1. Create an student
    validation 
        - check id, email and mobile 
        - email format validation - not null
        - mobile format validation - not null
        - id - number - not null
        - name - not null
        - batch - not null
    Response : Student successfully created 
2. Update an student
    All validations will remain same as of student creation api but extra check lgana hai ki jo id di hai payload me vo students array me honi chahiye. Agar aisa ni hai to Error message send krna hai ki 'Student with the given ${id} not found'

    else 'Student details successfully updated'
3. Delete an student 
    /api/v1/student/2
    student id se agar student hai students array me to use delete kr dena hai otherwise error de deni hai ki 'Student with the given ${id} not found'

3 APIS for Teacher
3 APIS for Batch 
Get all students 
Get all teachers 
Get all batches 
Get student by id 
Get teacher by Id 
Get batch by id 

APIS : 15

Cut off criteria - 5 Students
*/ 