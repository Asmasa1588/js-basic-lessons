//FIND
//looking for a particular ID. when looking for only one thing

const names = ["Jackie", "Jupiter", "Will", "Bob"];
const foundName = names.find((currentName) => currentName.startsWith("J"));
foundName;

//
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const isDividedByFive = (number) => number % 5 === 0;

const foundNumber = numbers.find(isDividedByFive);
foundNumber;

//SOME( returns TRUE or FALSE)
//

const moreNumbers = [1, 3, 5, 7, 9, 8, 11, 13];
const isEven = (number) => number % 2 === 0;
const areThereAnyEvenNumber = moreNumbers.some(isEven);
areThereAnyEvenNumber;

//EVERY
//can be use
const oddNumbers = [21, 23, 37];
const isOdd = (number) => number % 2 !== 0;
const areAllTheNumbersOdd = oddNumbers.every(isOdd);
areAllTheNumbersOdd;

//
