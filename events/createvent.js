const events = require("events");
// var myevent = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log("I hear a scream!");
// }; /// jse hhi hmare event emit hoga hmare yhe code chlega

// //Assign the event handler to an event:
// myevent.on("event", myEventHandler); // Yha hmara event hit hoga

// //Fire the 'event' event:
// myevent.emit("event"); /// my event emit

// const myEvent = new events.EventEmitter();
// myEvent.on("feeDeposit", function () {
//   console.log("Fee Deposit 1");
// });
// myEvent.on("feeDeposit", function () {
//   console.log("Fee Deposit 2");
// });
// myEvent.emit("feeDeposit");

// const myevent = new events.EventEmitter();

// myevent.on("hello", () => console.log("mhnt kro "));

// myevent.emit("hello");

const http = require("http");
const fs = require("fs");

// server = http.createServer((req, res) => {
//   //   readfile = fs.readFileSync("input", "utf-8");
//   //   writfile = fs.writeFileSync("output", readfile);

//   freadFiles = fs.createReadStream("input", "utf-8");
//   freadFiles.on("data", (chunk) => {
//     console.log(chunk);
//   });
//   freadFiles.on("end", () => {
//     console.log("end");
//     res.end("hii----------------");
//   });
//   //   console.log(freadFiles.data);
// });

// server.listen(4000, "localhost", () => {
//   console.log("server will be strt");
// });

const server = http.createServer((req, res) => {
  let rs = fs.createReadStream("input"); // yhe hmesha ak event emit krta he
  rs.on("data", (chunk) => {
    // event ko catch krta he on
    console.log("reading data");
    res.write(chunk);
  });
  rs.on("end", () => {
    console.log("end response");
    res.end();
  });
  rs.on("error", (error) => {
    res.end(error.message);
  });
});

server.listen("4000", "localhost", () => {
  console.log("Received request");
});
