const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = 3001;
const clientsInTheSystem = [
  {
    username: "happy-jupiter",
    password: "1234",
    country: "canada",
    id: "1",
  },
  {
    username: "gypsy",
    password: "abcd",
    country: "canada",
    id: "2",
  },
];

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password, req.body);
  // const token = jwt.sign(userLogInData, "shhhhh", {
  const foundClient = clientsInTheSystem.find((currentClient) => {
    return (
      currentClient.username === username && currentClient.password === password
    );
  });
  console.log({ foundClient });
  if (foundClient) {
    const { username, id, country } = foundClient;
    const jwtPayLoad = { username, id, country };
    const token = jwt.sign(jwtPayLoad, "secret");
    res.send({ status: "successful login", token });
  } else {
    res.status(401).send({ status: "login fail" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
