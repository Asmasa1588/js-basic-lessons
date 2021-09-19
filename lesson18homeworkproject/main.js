

//ex
const str = "05:25 AM";
const separatedTime = str.split(" ");
const letters = separatedTime[1];
console.log(letters);

//try other ways to extract AM
const hoursAndMinutesWithColumn = separatedTime[0];
const hoursAndMinutes = hoursAndMinutesWithColumn.split(":");
const hour = Number(hoursAndMinutes[0]);
const minutes = hoursAndMinutes[1];
console.log(hour, typeof minutes);

//time homework
//ex
//input will be a 8 symbols in length
//input will be in the format of
//HH:MM PM / AM

//example input 1:

const exampleInputOne = "03:45 AM";
const expectedResultOne = "0345";

// //ex input 2:
const exampleInputTwo = "08:00 AM";
const expectedResultTwo = "0800";

//ex input 3:
const exampleInputThree = "12:00 AM";
const expectedResultThree = "0000";
//ex input 4:
const exampleInputFour = "02:30 PM";
const expectedResultFour = "0230";

//ex input 5:
const exampleInputFive = "10:00 PM";
const expectedResultFive = "2200";

//ex input 6:
const exampleInputSix = "12:00 PM";
const expectedResultSix = "1200";

const convertToMilitaryTimeFormat = (normalTimeFormat) => {
  console.log("This is your input parameter", normalTimeFormat);
  return " ";
};

console.log("Testing with 03:45 AM", convertToMilitaryTimeFormat("0345"));
console.log("Testing with 08:00 AM", convertToMilitaryTimeFormat("0800"));
console.log("Testing with 12:00 AM", convertToMilitaryTimeFormat("0000"));
console.log("Testing with 02:30 PM", convertToMilitaryTimeFormat("0230"));
console.log("Testing with 10:00 PM", convertToMilitaryTimeFormat("2200"));
console.log("Testing with 12:00 PM", convertToMilitaryTimeFormat("1200"));

