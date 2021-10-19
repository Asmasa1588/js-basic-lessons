//rest api
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3001;

let pets = [
  {
    name: "Jupiter",
    age: 1,
    color: "black",
    isDeleted: false,
  },
  {
    name: "Gypsy",
    age: 8,
    color: "white",
    isDeleted: false,
  },
  {
    name: "Sultan",
    age: 10,
    color: "green",
    isDeleted: true,
  },
];

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

app.post("/data", function (req, res) {
  console.log(req.body);
  res.send("your request has been handled");
});

app.get("/pets", function (req, res) {
  res.send(
    pets.filter((currentPet) => {
      return currentPet.isDeleted === false;
    })
  );
});
app.post("/pets", function (req, res) {
  console.log(req.body);
  const newPet = {
    ...req.body,
    isDeleted: false,
  };
  pets.push(newPet);
  res.send(newPet);
});

app.put("/pets/:petName", function (req, res) {
  console.log(req.body);
  console.log(req.params.petName);
  pets = pets.map((currentPet) => {
    if (currentPet.name === req.params.petName) {
      return {
        ...currentPet,
        ...req.body,
      };
    }
    return currentPet;
  });
  console.log(pets);
  const foundUpdatedPet = pets.find((currentPet) => {
    return currentPet.name === req.params.petName;
  });
  res.send(foundUpdatedPet);
  //res.send("in progress");
});

app.get("/pets/:petName", function (req, res) {
  console.log(req.params);
  res.send(
    pets.find((currentPet) => {
      return currentPet.name === req.params.petName;
    })
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
