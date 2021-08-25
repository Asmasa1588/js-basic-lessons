// higher order functions
// means to store functions into variables
// Ex for a normal function

function hello(name, isHuman) {
  console.log("hello World");
  console.log("this is executed after hello world ", name, "isHuman ", isHuman);
}
// normal functions like this:
hello("jupiter", false);
hello("asma", true);
// example for function expression

const logMyAge = function (age) {
  console.log("your age is", age);
};
logMyAge(24);

//example
const increaseByTen = function (number) {
  return number + 10;
};
const numbers = [1, 2, 3];
const resultFromFirstMapping = numbers.map(increaseByTen);
console.log({ resultFromFirstMapping });

// example for our higher order function
// IMPT Rule, always call the function!!

const sum = function (a, b) {
  return a + b;
};
const mathOperation = function (firstNumber, secondNumber, callBackFunction) {
  console.log("math operation", callBackFunction(firstNumber, secondNumber));
};
mathOperation(5, 10, sum);
const subtract = function (a, b) {
  return a - b;
};
mathOperation(5, 10, subtract);

// normal functions can be overwritten and function expressions cant be overwritten.

function hello() {
  console.log("Opps what happened with the first version of hello function");
}
hello();

/*const mathOperation = function () {
  console.log(
    "this will not work because math operation has already been declared on line 40"
  );
};*/
//
const sumArrowFunction = (a, b) => {
  return a + b;
};
console.log("You can simpler functions like this", sumArrowFunction(20, 30));

const employeeFirstAndLastNames = [
  {
    firstName: "john",
    lastName: "williams",
  },
  {
    firstName: "mary",
    lastName: "lang",
  },
];
/*const employeeNames = (firstName, lastName) => {
  return firstName + lastName;
};
console.log(employeeNames);*/
const employeeLastNames = employeeFirstAndLastNames.map((currentEmployee) => {
    return currentEmployee.lastName;
  });
  console.log({ employeeLastNames });
