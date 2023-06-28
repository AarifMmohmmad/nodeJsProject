let prom = fetch("http://localhost:8900/api/v1/student", { mode: "no-cors" });
prom
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });