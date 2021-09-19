// if conditions,
//- if, else conditions
//- switch
//ternary operator
// line 7: if condition has met, log will print out the result.( condition met on line 6 and 7)
const myDogName = "Jupiter";
if (myDogName === "Jupiter") {
  console.log("yes, this is my dog");
  console.log("I am executed as well");
}

//if else example
// can ===, > , >= , < , <= , !==,
const priceForTheHotel = 160;
if (priceForTheHotel > 100) {
  console.log("place is too expensive");
} else {
  console.log("the place is fine");
}

//example
const conditionOne = 5 >= 5;
console.log({ conditionOne });

//ex
const conditionTwo = 5 <= 5;
console.log(conditionTwo);

//ex.
const conditionThree = 5 !== 100;
console.log(conditionThree);

// ex. startswith

const str = "Gypsy";
const conditionFour = str.startsWith("Gy");
console.log({ conditionFour });
if (str.startsWith("Gy")) {
  //if (conditionFour) {
  console.log(" it does start with Gy");
} else {
  console.log(" it doesnt start with Gy");
}

//ex. more than one condition

const doTheyAllowDogs = true;
const pricePerPerson = 250;
if (pricePerPerson < 100) {
  if (doTheyAllowDogs === true) {
    console.log("Yes we can go to this house");
  } else {
    console.log(
      "we are not going despite we can afford the house, because they dont allow dogs"
    );
  }
} else {
  console.log("we cannot afford this house");
}

//ex. one IF and two ELSE IF ,one ELSE

const myAge = 78;

if (myAge < 16) {
  console.log("you cant have a driver license because you are under age");
} else if (myAge >= 16 && myAge < 50) {
  console.log("you can have a driver license please be careful");
} else if (myAge >= 50 && myAge < 80) {
  console.log("you can have a driving license but you are getting old ");
} else {
  console.log("you are too old for a driving license");
}
//homework:
//create a number variable. its value can be between 0-24.
//the variable is a representation of the current hour of the day.
// if the number is less than 12, log the string "good morning"
//if the number btw 12-18, its " good afternoon"
//if its >=18 , then its "good evening"
//

//Homework

const hour = 23;
if (hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else if (hour >= 18 && hour <= 24) {
  console.log("good evening");
}

//switch

const favMonth = 3;
const prefixMessage = "your favorite month is  ";
switch (favMonth) {
  case 1:
    console.log(prefixMessage + "January");
    break;
  case 2:
    console.log(prefixMessage + "February ");
    break;
  case 3:
    console.log(prefixMessage + "March");
    break;
  case 4:
    console.log(prefixMessage + "April");
    break;
  case 5:
    console.log(prefixMessage + "May");
    break;

  case 6:
    console.log(prefixMessage + "June");
    console.log("This month is very especial");
    break;
  default:
    console.log("unknown month");
}
// alternative method

const numberToMonthsMapper = [
  `${prefixMessage} January`,
  `${prefixMessage} February`,
  `${prefixMessage} March`,
  `${prefixMessage} April`,
  `${prefixMessage} May`,
  `${prefixMessage} June`,
];
const outPutMessage = numberToMonthsMapper[favMonth - 1];
console.log(
  outPutMessage ? outPutMessage : "unknown month (This is the default case)"
);

//homework
//check the problem in the browser


// masters: 1= $ 3000
//BSC/BA: $7000 33000 300
//2: 2000