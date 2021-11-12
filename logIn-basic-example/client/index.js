console.log("login demo test");
const [startingPage] = document.getElementsByClassName("starting-page");
const [loginContainer] = document.getElementsByClassName("login-container");
const [registerContainer] =
  document.getElementsByClassName("register-container");
loginContainer.style.display = "none";
registerContainer.style.display = "none";

const registerClient = (event) => {
  event.preventDefault();
  console.log("register button click");
  const formElements = document.getElementById("register-form").elements;
  const username = formElements.username.value;
  const password = formElements.password.value;
  const country = formElements.country.value;
  console.log({
    username,
    password,
    country,
  });
};

document
  .getElementById("register-submit-button")
  .addEventListener("click", registerClient);

const logInClient = (event) => {
  event.preventDefault();
  console.log("submit button");
  const formElements = document.getElementById("login-form").elements;
  const username = formElements.username.value;
  const password = formElements.password.value;
  console.log(username, password);
  fetch("http://localhost:3001/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      //   test: "jupiter",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
};
document.getElementById("submit-button").addEventListener("click", logInClient);
document
  .getElementsByClassName("show-login-form")[0]
  .addEventListener("click", () => {
    startingPage.style.display = "none";
    loginContainer.style.display = "block";
  });
document
  .getElementsByClassName("show-register-form")[0]
  .addEventListener("click", () => {
    startingPage.style.display = "none";
    registerContainer.style.display = "block";
  });
