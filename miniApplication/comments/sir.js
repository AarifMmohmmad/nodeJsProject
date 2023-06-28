let students = [
    {
      name: "Sameer",
      age: 20,
    },
    {
      name: "Saad",
      age: 20,
    },
    {
      name: "Alan",
      age: 20,
    },
    {
      name: "Alzo",
      age: 20,
    },
  ];
  
  let teachers = [
    {
      name: "Sameer",
      age: 20,
      batch: "Nodejs",
    },
    {
      name: "Saad",
      age: 20,
      batch: "Nodejs",
    },
    {
      name: "Alan",
      age: 20,
      batch: "Nodejs",
    },
    {
      name: "Alzo",
      age: 20,
      batch: "Nodejs",
    },
  ];
  const http = require("http");
  const url = require("url");
  const server = http.createServer((request, response) => {
    try {
      const reqUrl = request.url;
      if (reqUrl.includes("student")) {
        response.writeHead(200);
        response.end(JSON.stringify(students));
      } else if (reqUrl.includes("teacher")) {
        response.writeHead(200);
        response.end(JSON.stringify(teachers));
      } else {
        response.writeHead(404);
        response.end();
      }
    } catch (error) {
      response.writeHead(500);
      response.end();
    }
  });
  server.listen(8900, "127.0.0.1", () => {
    console.log("Resturant accepting Orders");
  });