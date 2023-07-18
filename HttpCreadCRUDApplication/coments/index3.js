
// function studentApiHandler(req, resp) {
//   function createCheckIdClosure() {
//     return function (id) {
//       return students.filter((obj) => obj.id == id);
//     };
//   }
//   const checkid = createCheckIdClosure();
//   let { pathname } = url.parse(req.url, true);
//   let methodType = req.method;
//   let paths = req.url.split("/");
//   let userID = paths[paths.length - 1];


//   if (pathname === "/api/v1/student" && methodType === "POST") {
//     let body = "";
//     req.on("data", (chunk) => {
//       console.log("Processing your data in chunks");
//       body += chunk;
//     });
//     req.on("end", () => {
//       const { name, mobile, batch, id, email } = JSON.parse(body);
//       const mobileValidation = /^[6-9]\d{9}$/;
//       const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//       let studentdatabyid = checkid(id);

//       if (!name || !batch || !id || !mobileValidation.test(mobile) || !emailValidation.test(email)) {
//         resp.write("given valid impormation");
//         resp.end();
//       } else if (checkid() && studentdatabyid.length > 0) {
//         resp.write("user already exict");
//         resp.end();
//       } else {
//         students.push(JSON.parse(body));
//         console.log(students);
//         fs.writeFileSync("student.js", JSON.stringify(students));
//         console.log("Processing complete now sending response");
//         resp.write(JSON.stringify(checkid(id)[0]));
//         resp.end();
//       }
//     });
//   } else if (methodType === "GET" && (pathname === `/api/v1/student/${userID}` || pathname === "/api/v1/student")) {
//     if (!isNaN(userID)) {
//       if (checkid(userID) && checkid(userID).length > 0) {

//         resp.write(JSON.stringify(checkid(userID)[0]));
//         resp.end();
//       } else {
//         resp.write("User not found in given id");
//         resp.end();
//       }

//     } else {
//       resp.end(JSON.stringify(students));
//     }
//   } else if (methodType === "PUT" && pathname === `/api/v1/student/${userID}`) {
//     if (!isNaN(userID)) {
//       if (checkid(userID) && checkid(userID).length > 0) {
//         req.on("data", (chunk) => {
//           body = "";
//           body += chunk;
//         });
//         req.on("end", () => {
//           let { name, mobile, batch, email } = JSON.parse(body);
//           console.log(checkid(userID)[0]);
//           if (name || mobile || batch || email) {
//             if (name) {
//               checkid(userID)[0].name = name;
//             }

//             if (mobile) {
//               if (/^[6-9]\d{9}$/.test(mobile)) {
//                 checkid(userID)[0].mobile = mobile;
//               } else {
//                 resp.write("given valid number");
//                 resp.end();
//               }
//             }
//             console.log(checkid(userID)[0]);
//             if (batch) {
//               checkid(userID)[0].batch = batch;
//             }
//             if (email) {
//               if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//                 checkid(userID)[0].email = email;
//               } else {
//                 resp.write("please right email");
//                 resp.end();
//               }
//             }
//             console.log(checkid(userID)[0], "102");

//             resp.write(JSON.stringify(checkid(userID)[0]));
//             resp.end();

//           } else {
//             resp.write("please given impormation");
//             resp.end();
//           }
//         });

//       } else {
//         resp.write("User not found in given id");
//         resp.end();
//       }
//     }
//   } else if (methodType === "DELETE" && pathname === `/api/v1/student/${userID}`) {
//     if (checkid(userID) && checkid(userID).length > 0) {
//       students.splice(students.indexOf(checkid(userID)), 1);
//       resp.writeHead(200, "student suceessfully delet");
//       resp.write("student suceessfully delet");
//       resp.end();
//     } else {
//       resp.writeHead(200, "student suceessfully delet");
//       resp.write("student not  found");
//       resp.end();
//     }
//   } else {
//     resp.writeHead(404);
//     resp.end(`API NOT FOUND. API : ${pathname} Method Type : ${methodType}`);
//   }
// }

