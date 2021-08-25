// reduce
// it is use to take an array as input and transform it into either object or another array /number/string etc
// we can have an array of numbers and we can reduce it to a single number

const numbers = [5, 6, 7, 8, 9];
const sum = numbers.reduce((previousSum, number) => {
  console.log({ previousSum, number });
  return previousSum + number;
}, 10);
console.log({ sum });

// ex 2
const books = [
  {
    title: "the adventures of sherlock holmes",
    author: "james",
  },
  {
    title: "cook book",
    author: "mary",
  },
  {
    title: "cats",
    author: "julia",
  },
];
const myFavAuthor = books.reduce((previousConcatedNames, book) => {
  console.log({ previousConcatedNames, book });
  return previousConcatedNames + ", " + book.author;
}, "");
console.log({ myFavAuthor });

// ex 3
// this exercise return the author name start with M

const authorStartingWithM = books.reduce((previousName, currentBook) => {
  if (currentBook.author.startsWith("m")) {
    return currentBook.author;
  }
  return previousName;
}, "");
console.log({ authorStartingWithM });

//ex 4
// finding the max salary of an employee

const employees = [
  {
    name: "alex",
    salary: 10000,
  },
  {
    name: "jupiter",
    salary: 12000,
  },
  {
    name: "james",
    salary: 11000,
  },
];
const maxSalary = employees.reduce(
  (previouslyCalculatedMaxSalary, currentEmployee) => {
    if (currentEmployee.salary > previouslyCalculatedMaxSalary) {
      return currentEmployee.salary;
    }
    return previouslyCalculatedMaxSalary;
  },
  0
);
console.log({ maxSalary });
// ex 5
//we starting from array of numbers.
//our goal is to calculate how many even numbers we have

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
// accomplishing the task using filter
//step 1, filtering only the even numbers
const onlyEvenNumbers = someNumbers.filter((currentNumber) => {
  if (currentNumber % 2 === 0) {
    return true;
  }
  return false;
});
// step 2
//now that we have only even numbers, we can simply get the length of this new array
const numberOfEvenNumbersUsingFilter = onlyEvenNumbers.length;
console.log({ numberOfEvenNumbersUsingFilter });

//ex 6
//accomplishing the same thing using the reduce method

const numberOfEvenNumbersUsingReduce = someNumbers.reduce(
  (previousSumEvenNumbers, currentNumber) => {
    if (currentNumber % 2 === 0) {
      return previousSumEvenNumbers + 1;
    }
    return previousSumEvenNumbers;
  },
  0
);
console.log({ numberOfEvenNumbersUsingReduce });

