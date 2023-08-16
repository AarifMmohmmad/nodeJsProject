const Student = require("../dataBase/models/userModels.js");

const creat = async (req, res) => {
  try {
    student = new Student(req.body);
    await student.save();
    // await Student.create(req.body);
    res.send({
      status: "success",
      massge: "student success fully creat",
      data: student,
    });
  } catch (error) {
    res.send({
      status: "failer",
      massge: "Something wrong with request.",
      error: error.message,
    });
  }
};

let creatBulk = async (req, res) => {
  users = req.body;
  const data = [];
  for (let user of users) {
    if (await Student.findOne({ email: user.email })) {
      await data.push({
        status: "fail",
        massge: "valid imformation",
      });
    } else {
      const student = await new Student(user);
      await student.save();

      // await Student.create(user);
      if (student) {
        await data.push({
          status: "success",
          massge: "student success fully creat",
          data: user,
        });
      }
    }
  }
  res.send(data);
};
//////////////////////////////////////////////

const getAlldata = async (req, res) => {
  try {
    data = await Student.find();
    res.send({
      status: "success",
      massge: "get all data",
      data: data,
    });
  } catch (error) {
    res.send({
      status: "failer",
      massge: "Something wrong with request.",
      data: [],
    });
  }
};
const userfind = async (req, res) => {
  id = req.params.id;
  console.log(id);
  try {
    data = await Student.findOne({ _id: id });
    res.send({
      status: "success",
      massge: "user data ",
      data: data,
    });
  } catch (error) {
    res.send({
      status: "failer",
      massge: "Something wrong with request.",
      data: null,
    });
  }
};
///////////////
const update = async (req, res) => {
  try {
    data = await Student.findByIdAndUpdate({ _id: req.body.id }, req.body);
    // data = await Student.updateOne({ email: req.body.email }, req.body);
    // data = await Student.findOneAndUpdate({ email: req.body.email }, req.body);

    res.send({
      status: "success",
      massge: "student succesfully  update",
      data: data,
    });
  } catch (error) {
    res.send({
      status: "failer",
      massge: "Something wrong with request.",
      data: error.message,
    });
  }
};

////////////////

const delet = async (req, res) => {
  try {
    data = await Student.deleteOne({ email: req.body.email });
    // data = await Student.findByIdAndDelete({ _id: req.body.id });

    res.send({
      status: "success",
      massge: "student succesfully  delet",
      data: data,
    });
  } catch (error) {
    res.send({
      status: "failer",
      massge: "Something wrong with request.",
      data: error.message,
    });
  }
};

const deletBulk = async (req, res) => {
  try {
    data = await Student.deleteMany({ name: req.body.name }); // jo bhi delet krna he req.body me uska nam deve
    // data = await Student.findByIdAndDelete({ _id: req.body.id });

    res.send({
      status: "success",
      massge: "student succesfully  delet",
      data: data,
    });
  } catch (error) {
    res.send({
      status: "failer",
      massge: "Something wrong with request.",
      data: error.message,
    });
  }
};

///////////////

module.exports = {
  creat,
  creatBulk,
  getAlldata,
  update,
  delet,
  deletBulk,
  userfind,
};

//
// let creatBulk = async (req, res) => {
//   users = req.body;
//   const data = [];
//   console.log(users);
//   for (let user of users) {
//     if (await Student.findOne({ email: user.email })) {
//       let student = new Student(user);
//       student
//         .save()
//         .then()
//         .catch((error) => {
//           data.push({
//             status: "fail",
//             massge: error.message,
//           });
//           console.log("one");
//         });
//     } else {
//       const student = await new Student(user);
//       await student.save();
//       if (student) {
//         data.push({
//           status: "success",
//           massge: "student success fully creat",
//           data: user,
//         });
//       }
//       console.log("two");
//     }
//   }
//   res.send(data);
// };
