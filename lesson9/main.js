// Map -Methods
// transforming data.
//ex 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByTenArray = numbers.map((number) => {
  return number * 10;
});
console.log({ multiplyByTenArray });
// ex 2
//OR ||

const employeeNames = ["john", "alex", "mike", "mary"];
const hiredEmployees = employeeNames
  .filter((currentEmployeeName) => {
    if (
      currentEmployeeName.startsWith("m") ||
      currentEmployeeName.startsWith("a")
    ) {
      return true;
    }
    return false;
  })
  .map((currentEmployeeName) => {
    return {
      name: currentEmployeeName,
      startingSalary: 1000,
      hiredDate: new Date(),
    };
  });
console.log({ hiredEmployees });

// ex 3
const employeesWithComplexData = [
  {
    firstName: "victor",
    lastName: "bob",
    age: 31,
    country: "brazil",
  },
  {
    firstName: "laurie",
    lastName: "lane",
    age: 27,
    country: "india",
  },
];
const employeeLastNames = employeesWithComplexData.map((currentEmployee) => {
  return currentEmployee.lastName;
});
console.log({ employeeLastNames });
const employeeAges = employeesWithComplexData.map((currentEmployee) => {
  return currentEmployee.age;
});
console.log({ employeeAges });

const employeesWithLessData = employeesWithComplexData.map(
  (currentEmployee) => {
    return {
      firstName: currentEmployee.firstName,
      age: currentEmployee.age,
    };
  }
);
console.log({ employeesWithLessData });

// homework.map operator
//array of 5 numbers.
// transform these numbers to their square root.
//ex 25 & 100 ->  5  & 10

// Array of 3 objects containing information about brands and colors(cars)
// transform a new array includes all this info plus with the current date
