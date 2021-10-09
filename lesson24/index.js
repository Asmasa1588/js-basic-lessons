//rest api
const express = require("express");
const app = express();
const port = 3001;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

const employeesArray = [
  {
    employeeDept: "Finance",
    name: "John",
    salary: 50000,
    state: "PA",
  },
  {
    employeeDept: "lab",
    name: "Jessica",
    salary: 58000,
    state: "TX",
  },
  {
    employeeDept: "Pay Roll",
    name: "Kevin",
    salary: 60000,
    state: "NY",
  },
  {
    employeeDept: "IT",
    name: "Mike",
    salary: 70000,
    state: "CT",
  },
];

app.get("/data", function (req, res) {
  res.send(employeesArray);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
