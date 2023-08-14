// aap ese kishi bhi file me import kr skte he

const mongoosee = require("mongoose");

let connect = mongoosee
  .connect("mongodb://localhost:27017/studenting", {
    useNewUrlParser: true,
  })
  .then((connection) => {
    console.log("concetion is successfully");
  })
  .catch((error) => {
    console.log("error");
  });

// agr aap asa krte he to aapko vha ak function ke sath call krna pdega

// let connect = async () => {
//   try {
//     const conn = await mongoosee.connect("mongodb://localhostss:27017", {
//       useNewUrlParser: true,
//     });
//     console.log("connection successfulyy");
//   } catch (error) {
//     console.log(error);
//   }
// };
// module.exports = connect;

// aap asa bhi kr skte ho
// let connects = mongoosee.connect("mongodb://localhosts:27017", {
//   useNewUrlParser: true,
// });
// console.log("connection successfulyy");
