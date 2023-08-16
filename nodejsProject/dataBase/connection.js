const mongose = require("mongoose");

mongose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then((connection) => {
    console.log("connection is successfuly -", connection.connection.host);
  })
  .catch((error) => {
    console.log(error);
  });
