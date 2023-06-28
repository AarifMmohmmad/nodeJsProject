const fs = require("fs");

const d = fs.readFileSync("student.js", {encoding : "utf-8"});

fs.writeFileSync("index.js", d, {flag : "a+"});