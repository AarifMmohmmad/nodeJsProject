const http = require("http");
const fs = require("fs");
server = http.createServer();

server.on("request", (req, res) => {
  // server ak event emit krta he jiska nam request
  for (let i = 0; i <= 10; i++) {
    data = `heelo ${i} \n`;
    let myNum = i;
    console.log(data);
    fs.writeFile("output", data, "utf-8", () => {
      console.log("Mynumber is working " + myNum);
      console.log(data);
    });
    Promise.resolve(10).then(function (value) {
      console.log("Promise value " + value);
    });
  }
  // dataread = fs.readFileSync("input", "utf-8");
  res.end("dataread");
});

server.listen(4001, "localhost", () => {
  console.log("server will be port number in 4001");
});
