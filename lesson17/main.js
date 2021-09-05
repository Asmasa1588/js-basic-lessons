//javascript Destructuring, and spreading syntax

//Destructuring in Objects

const obj = {
  name: "Jupiter",
  color: "Brown and black",
  breed: "Australian cattle dog",
  gender: "male",
};

//------------------------------------
//ex
const {
  name,
  color,
  breed,
  gender,
  unsupportedProp,
  unsupportedProp2 = "some different values",
} = obj;
console.log(unsupportedProp2);

//Destructuring in Arrays

//ex
const pets = ["Gypsy", "Jupiter", "Lora", "Kircho"];
const [myCat, myDog, someOtherDog, someOtherCat, nonIncludedElement] = pets;
console.log(nonIncludedElement);

//destructuring in Function
//ex

const sayHello = ({ name, breed }) => {
  //const {name, breed}= obj
  console.log(`hello, ${name} ! The breed is- ${breed}`);
};
sayHello(obj);
sayHello({ name: "abc", breed: "some kind of breed" });

// array destructuring  in function
//ex
const extractTwoElement = ([firstElement, secondElement]) => {
  console.log(`1-${firstElement} 2-${secondElement}`);
};
extractTwoElement(pets);
extractTwoElement([100, 108, 112]);

// object Rest operator
//

const employee = {
  firstName: "jupiter",
  country: "Canada",
  salary: 10000,
  hiredDate: new Date(),
};
// ... otherInformation is here REST OPERATOR (start with ...)
// every Property that i snot log in, will be Rest operator

const { salary, hiredDate, ...otherInformation } = employee;
console.log(otherInformation);

// 9/4/21

// Array destructuring
//rest operation for array destructuring
//ex:

const arr = [1, 2, 3, 4];
const [firstNumber, secondNumber, ...restOfNumbers] = arr;
console.log(firstNumber, secondNumber, restOfNumbers);

//ex

const firstProperty = "pizza";
const secondProperty = "cake";
// old style
const oldProperty = {
  firstProperty: firstProperty,
  secondProperty: secondProperty,
};
console.log(oldProperty);
//new style
const newProperty = {
  firstProperty,
  secondProperty: 100,
};
console.log(newProperty);

newProperty.secondProperty = 90;
console.log(newProperty);

//Rest examples using function

const sum = (...numbers) => {
  console.log(
    numbers.reduce((previousValue, currentNumber) => {
      return previousValue + currentNumber;
    }, 0)
  );
};
sum(1, 2, 3);
sum(10);
sum(40, 10, 50, 200, 100);

const sumTheOldWay = (a, y, c) => {
  console.log(a + y + c);
};
sumTheOldWay(10, 20, 100);

//spread operator
//concating arrays of combining objects

const personalData = {
  email: "abc@usa.com",
  name: "jupiter",
  country: "Canada",
};
const sports = {
  football: false,
  volleyball: false,
  running: true,
};
const myAwesomeDog = {
  owner: "Asma",
  ...personalData,
  ...sports,
};
console.log(myAwesomeDog);

//homework
//create 3 objects, containing properties and values. then create a 4th object which is combing the previous 3

//ex  spread operator for arrays

const firstArray = [1, 2, 3];
const secondArray = [100];
const thirdArray = [2000, 3000, 8000];

const combinedArrays = [...firstArray, ...secondArray, ...thirdArray, 70];
console.log(combinedArrays);

// homework for spread operator: create 4 arrays of strings. combine all 4 into 1 new array
//write down a function which can print out all the parameters which are passed to the function.
//use Rest operator to for function
