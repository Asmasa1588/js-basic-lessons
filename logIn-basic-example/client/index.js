console.log("login demo test");
const logInClient = (event) => {
  event.preventDefault();
  console.log("submit button");
  const formElements = document.getElementById("login-form").elements;
  const username = formElements.username.value;
  const password = formElements.password.value;
  console.log(username, password);
  fetch("http://localhost:3001/", {
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
