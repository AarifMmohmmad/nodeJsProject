const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
console.log(process.env.PORT);
port = process.env.PORT || 5000;
Ip = process.env.IP;
module.exports = {
  port,
  Ip,
};
