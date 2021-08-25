// Reduce

const numbersToBeSumTogether = [1, 2, 3];
const sumArrowFn = (sum, currentNumber) => {
  return sum + currentNumber;
};

const sumResult = numbersToBeSumTogether.reduce(sumArrowFn, 0);
console.log({ sumResult });

// Ex Array of string
//the goal is to create a new string which contains all the starting letters of the below names
const names = ["john", "jupiter", "wilson", "gypsy"];
const firstLettersReducer = (nameAccumulator, nextName) => {
  debugger;
  return nameAccumulator + nextName[0];
};
/*const allNamesStartingLetters = names.reduce(firstLettersReducer, "");
console.log({ allNamesStartingLetters });*/
// make this example using MAP. expecting the same result jjwg
//
const allNamesStartingLetters = names
  .map((currentName) => {
    return currentName[0];
  })
  .join("");

/*const employeeLastNames = employeesWithComplexData.map((currentEmployee) => {
  return currentEmployee.lastName;
});
console.log({ employeeLastNames });*/
console.log({ allNamesStartingLetters });
