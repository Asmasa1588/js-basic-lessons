//concept of promise

const promiseExample = Promise.resolve(["Gypsy", "Jupiter"]);
console.log(promiseExample);
//1st way
promiseExample.then((pets) => {
  console.log(pets);
});
//2nd way

const resolvingPromise = async function () {
  const data = await promiseExample;
  console.log(data);
};
resolvingPromise();

//10/2/21
const petsAtHome = [
  {
    animalType: "dog",
    name: "Jupiter",
    years: 1,
  },
  {
    animalType: "cat",
    name: "gypsy",
    years: 8,
  },
  {
    animalType: "frog",
    name: "jason",
    years: 3,
  },
  {
    animalType: "turtle",
    name: "wilson",
    years: 100,
  },
];
const fetchMyFavPet = (animal) => {
  const foundAnimal = petsAtHome.find((currentPet) => {
    if (currentPet.animalType === animal) {
      return true;
    }
    return false;
  });
  if (foundAnimal) {
    return Promise.resolve({
      name: foundAnimal.name,
      years: foundAnimal.years,
    });
  }

  return Promise.reject(`${animal} is not home.`);
};
// then
fetchMyFavPet("lizard")
  .then((favPet) => {
    const { name, years } = favPet;
    console.log(name, years);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

//async await
const resolvingMyFavPet = async () => {
  try {
    const foundFavPet = await fetchMyFavPet("cow");
    console.log(foundFavPet);
  } catch (error) {
    console.log(error);
  }
};
resolvingMyFavPet();
