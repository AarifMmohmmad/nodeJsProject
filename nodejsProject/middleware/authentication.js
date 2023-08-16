const Student = require("../dataBase/models/studentModels.js");
const authentication = async (req, res, next) => {
  try {
    let id;
    if (req.body.id) {
      id = req.body.id;
      console.log();
      checkUser = await Student.findOne({ _id: id });
    } else {
      id = req.params.id;
      checkUser = await Student.findOne({ _id: id });
    }
    if (checkUser) {
      next();
    } else {
      res.send({
        status: "failer",
        message: "something wrong please chck your details key",
        data: null,
      });
    }
  } catch (error) {
    res.send({
      status: "failer",
      message: "please give a vaild id",
      data: null,
    });
  }
};
module.exports = authentication;
