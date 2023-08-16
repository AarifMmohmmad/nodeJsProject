const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
port = process.env.PORT || 5000;
Ip = process.env.IP;
module.exports = {
  port,
  Ip,
};
