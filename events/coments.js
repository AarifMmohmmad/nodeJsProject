const http = require("http");
const fs = require("fs");

server = http.createServer();

server.on("request", (req, res) => {
  // server ak event emit krta he jiska nam request
  data = "";
  for (let i = 0; i <= 100000; i++) {
    data += `heelo ${i} \n`;
  }
  console.log("33");

  fs.writeFile("output", data, "utf-8", () => {
    console.log("data read");
  });
  //   dataread = fs.readFileSync("output", "utf-8");
  //   res.end(dataread);
  //   dataread = fs.readFile("output", "utf-8", (err, data) => {
  //     console.log("read alll data successfully");
  //     res.end(data);
  //   });

  //   readstrem = fs.createReadStream("output");

  //   readstrem.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   //   console.log(data);
  //   readstrem.on("end", () => {
  //     res.end("data done ");
  //   });

  //   readstrem.pipe(res);
  res.end("data done ");
});

server.listen(4002, "localhost", () => {
  console.log("server will be port number in 4001");
});
