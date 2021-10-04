//THIS  & functions
const yourEmployeeSalary = function (someParameter) {
  return `${this.name} is earning $${this.salary}. ${
    someParameter ? "He is out of the company" : "we will promote him"
  }`;
};

const dogEmployee = {
  name: "Jupiter",
  salary: 50000,
  yieldSalary: yourEmployeeSalary,
};
const catEmployee = {
  name: "Gypsy",
  salary: 150000,
  yieldSalary: yourEmployeeSalary,
};
const employee = {
  name: "John",
  salary: 100000,
  yieldSalary: yourEmployeeSalary,
};
console.log(catEmployee.yieldSalary(false));

//example
//Binding
// is changing the THIS method

const methodOutOfContext = catEmployee.yieldSalary;
//const methodOutOfContext1 = catEmployee.name;
//line 32: incorrect way to execute the function.
console.log(methodOutOfContext(false));
//line 34: the correct one, and we call this implicit way of setting
console.log(catEmployee.yieldSalary(false));
//line 36: this is explicit way to stetting this key word
console.log(methodOutOfContext.bind(catEmployee)(false));
//Alternative to BIND
console.log(methodOutOfContext.call(catEmployee, false));

//question: why did we use result w/o the this above?
//THIS keyword only works when it being called over an object.

//ex 2 Binding
console.log(dogEmployee.yieldSalary.bind(catEmployee)(false));
//homework
//watch video.
//next class. questions.

//ex
const someFunction = function (parameter1, parameter2) {
  console.log({ parameter1, parameter2 });
  console.log(this.numberOfFans);
};
const params = [47, "New York"];
const obj = {
  numberOfFans: 150,
};
someFunction.call(obj, "New York", 67);
const singer = {
  name: "ben king",
  method: someFunction,
  numberOfFans: 10000,
};
singer.method();

//Homework
//create a function which returns this.numberOne + this.numberTwo
//create an object which will contain three properties.1st and second will be 'numberOne and numberTwo'.
//the third property will 'sum' property, and that its value will be the Function from the first step.
//use implicating binding to execute the 'sum' method
//use explicit binding to execute the function from the  first step .by binding the function with an
//object which contains two properties numberOne and numberTwo.
//Disclaimer: numberOne and numberTwo will always be numbers(ex 3, 7 100).

//to-do: explain the difference between arrow function and function expression
//trial 1
// const someRandomNumbers = function (twoMoreNumbers) {
//   return `${this.numberOne} and  ${this.numberTwo} `;
// };
// const someNumbers = {
//   numberOne: 12,
//   numberTwo: 100,
//   sum: someRandomNumbers,
// };
// console.log(someNumbers.sum());
//solved trial 1
const someRandomNumbers = function (number3 = 100) {
  console.log("this", this);
  return this.numberOne + this.numberTwo + number3;
};
const someNumbers = {
  numberOne: 12,
  numberTwo: 100,
  sum: someRandomNumbers,
};
console.log(someNumbers.sum());

const someNumbers1 = {
  numberOne: 10,
  numberTwo: 80,
};
console.log(someNumbers.sum.bind(someNumbers1)(1000));
//console.log(someRandomNumbers.bind(someNumbers)());
