// The most basic FOR LOOP examples
/*for (let i = 0; i < 10; i++) {
  console.log("hello", i);
}
for (let i = 5; i < 10; i += 2) {
  console.log(" incremneting 1 by 2", i);
}
const dogs = ["jupiter", "max", "denali", "watson"];
for (let i = 0; i < dogs.length; i++) {
  console.log("current dogs", dogs[i]);
}
const movies = ["the martian", "star wars", " star trek", "the matrix"];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].includes("matrix")) {
    console.log("my fav movie", movies[i]);
  }
}
const movies2 = ["the martian", "star wars", "star trek", "the matrix"];
for (let i = 0; i < movies2.length; i++) {
  if (movies2[i].startsWith("s")) {
    console.log("movies start with S are ", movies2[i]);
  }
}

// array of employees
const employees = [
  {
    firstName: "John",
    lastName: "mike",
    phone: "123-456-7896",
  },
  {
    firstName: "Ruby",
    lastName: "deliure",
    phone: "609-456-1234",
  },
  {
    firstName: "victoria",
    lastName: "ded",
    phone: "908-345-6540",
  },
];
for (let i = 0; i < employees.length; i++) {
  if (employees[i].lastName.endsWith("d")) {
    console.log(
      "searching for employee with the last name ending at d letter",
      employees[i]
    );
  }
}
for (let i = 0; i < employees.length; i++) {
  if (employees[i].phone.includes("609")) {
    console.log(
      "show the employee with the phone number start with",
      employees[i]
    );
  }
}

// for of loop
for (const employee of employees) {
  console.log("for of", employee);
}

const cars = ["honda", "toyota", "ford", "chevy"];
for (const car of cars) {
  console.log("--", car);
}*/

const employees = [
  {
    firstName: "kevin",
    salary: 50000,
  },
  {
    firstName: "sara",
    salary: 54000,
  },
  {
    firstName: "laurie",
    salary: 52500,
  },
];

let maxSalary = 0;
let employeeNameWithMaxSalary = "";
for (let i = 0; i < employees.length; i++) {
  console.log("$$$", employees[i]);
  if (employees[i].salary > maxSalary) {
    maxSalary = employees[i].salary;
    employeeNameWithMaxSalary = employees[i].firstName;
  }
}

console.log("maxSalary", employeeNameWithMaxSalary, maxSalary);
const minSalaryThreshHold = 52000;
for (const currentEmployee of employees) {
  if (currentEmployee.salary > minSalaryThreshHold) {
    console.log("---", currentEmployee.firstName);
  }
}
