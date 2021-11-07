console.log("Hello my beautiful pets");
fetch("http://localhost:3001/pets")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    const petsList = document.getElementsByClassName("pets-list")[0];
    console.log(petsList);
    const listItems = data
      .map((pet) => {
        return `<li>${pet.name}</li>`;
      })
      .join("");
    petsList.innerHTML = listItems;
  });

const createNewPet = (event) => {
  event.preventDefault();

  const formElements = document.getElementById("create-pet-form").elements;
  console.log(formElements);
  const nameInput = formElements.name.value;
  const ageInput = formElements["age"].value;
  const colorInput = formElements["color"].value;
  //console.log(nameInput, ageInput, colorInput);
  fetch("http://localhost:3001/pets", {
    method: "POST",
    body: {
      name: nameInput,
      age: Number(ageInput),
      color: colorInput,
    },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data, "---");
    })
    .catch((error) => {
      console.error(error,"----");
    });
};
document
  .getElementById("create-new-pet")
  .addEventListener("click", createNewPet);

  // 
