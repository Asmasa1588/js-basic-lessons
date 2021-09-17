//CONST & LET
//console.log(word);

const word = "some text";

//If we declare an object or array with CONST keyword, they can be modified or changed.

const number = 5;
//number = 3;
const object = {
  pi: 3.14,
};
object.pi = "This should not be possible but it is";
console.log(object);
//object = "";

//ex:

const pets = [];
console.log(pets);
//pets = [];
// introducing References in JS
// in JS OBJECTS are "referential".
// in js Functions and Arrays are kind of Objects.( also referential)
//Primitive(non-referential ): Booleans, Strings, Numbers,
// Primitive Example:
let firstNumber = 7;
//declaring and initializing
let secondNumber = firstNumber;
firstNumber = firstNumber + 1;
console.log(firstNumber, secondNumber);
console.log(secondNumber);

//string example:
let str1 = "abc";
const str2 = str1;
str1 = "jupiter";
console.log(str1, str2);

//Referential example
const object1 = {
  name: "Jupiter",
};
const object2 = object1;
const object3 = object2;
object1.name = "Gypsy";
console.log(object1, object2, object3);

// example
const firstObject = {
  brand: "Tesla",
  model: "s",
};
const secondObject = {
  brand: "honda",
  model: "civic",
};
// ... spread operator. only works inside the { }brackets
const thirdObject = { ...firstObject, ...secondObject };
console.log(thirdObject);
firstObject.model = "3";
console.log(firstObject, secondObject);

//
const array1 = ["jupiter"];
const array2 = array1;
array1.push("Gypsy");
console.log(array1, array2);

const arr1 = ["jupiter"];
const arr2 = [...arr1];
arr1.push("Gypsy");
console.log(arr1, arr2);

// ex

let objectOne = {
  temp: 85,
};
let objectTwo = objectOne;
objectOne = {
  price: 100,
};
console.log(objectOne);
console.log(objectTwo);

//Homework
//create two arrays containing strings.create a third array, which will have all of the elements from both array using Spread operator
//to the third array, append one element (the first and second array must not changed)
//create two objects containing a couple of properties.then creat a third objects which will use all the properties from the previous properties using the spread operator.
// try to change each of the three objects and observe how the rest of the objects affect.

let book1 = {
  author: "James",
};
let book2 = {
  author: "Kevin",
};
let book3 = { ...book1, ...book2 };
console.log(book3);
