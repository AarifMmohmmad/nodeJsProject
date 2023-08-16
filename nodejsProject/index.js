const express = require("express");
const environment = require("./config/env.js");
const mongodbConnection = require("./dataBase/connection.js");
const studentrouter = require("./routers/userRouter.js");

const app = express();

app.use(express.json());
app.use("/student", studentrouter);

app.listen(environment.port, environment.Ip, () => {
  console.log(`server will be start ${environment.port}`);
});
