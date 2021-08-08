// the filter method
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((currentNumber) => {
  console.log({
    currentNumber,
    numbers,
  });
  if (currentNumber % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(evenNumbers);

const names = ["julia", "mike", "victor", "bob", "mary"];
const namesStartingWithM = names.filter((currentName) => {
  if (currentName.startsWith("m")) {
    return true;
  }
  return false;
});
console.log({ namesStartingWithM });
//homework- arrays, filters,

//homework
const cars = [
  {
    brand: "fords",
    year: 2009,
  },
  {
    brand: "honda",
    year: 2011,
  },
  {
    brand: "toyota",
    year: 2012,
  },
  {
    brand: "jeep",
    year: 2017,
  },
  {
    brand: "chevy",
    year: 2020,
  },
];

let newCars = cars.filter(function (e) {
  return e.year > 2011;
});
console.log(newCars);

//more homework
//week spending
let months = [
  { week: "April", spending: 350 },
  { week: "May", spending: 720 },
  { week: "June", spending: 158 },
  { week: "July", spending: 920 },
  { week: "August", spending: 405 },
];

let monthsWithBigSpending = [];
for (const month of months) {
  if (month.spending > 500) {
    monthsWithBigSpending.push(month);
    //monthsWithBigSpending = months[i].spending;
  }
}
console.log(monthsWithBigSpending);

//maxSalary = employees[i].salary;
//employeeNameWithMaxSalary = employees[i].firstName;
