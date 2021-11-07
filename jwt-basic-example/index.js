const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = 3001;

app.get("/", function (req, res) {
  const userLogInData = {
    email: "nasa.js@gmail.com",
    password: "1234",
    country: "usa",
  };

  // const token = jwt.sign(userLogInData, "shhhhh", {
  //   expiresIn: 60,
  // });
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hc2EuanNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0IiwiY291bnRyeSI6InVzYSIsImlhdCI6MTYzNjE2NzY0OCwiZXhwIjoxNjM2MTY3NzA4fQ.E28QAJIvz8eIyiUTQH3Lwgpx6lnapPhrknsePhOgn2U"
  const decoded = jwt.verify(token, "shhhhh");
  console.log(decoded);
  res.send(token);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
