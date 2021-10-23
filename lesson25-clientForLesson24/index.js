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
  console.log("button click");
};
document
  .getElementById("create-new-pet")
  .addEventListener("click", createNewPet);
