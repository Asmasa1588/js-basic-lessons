// //Write a program that has a input variable called unformatedTime. The time should be in the format "HH:MM AM" or "HH:MM PM". Hours may be one or two digits, for example, "1:10 AM" or "11:30 PM".

// Basically:

// const unformatedTime = "1:10 AM"

// Your program should include a function(named - convertTimeFormat) that takes a string parameter containing the time. This function should convert the time into a four-digit military time based on a 24-hour clock. For example, "1:10 AM" would output "0110 hours", "11:30 PM" would output "2330 hours", and "12:15 AM" would output "0015 hours".

// The expectation from you is to create a function, which is going to be used like this:

// console.log(convertTimeFormat(unformatedTime))

// const time = moment("1:10 AM");
// moment("1:10 AM", " HH:mm: A");

// const convertTimeFormat = (time24h) => {
//   const [convertTime12to24, modifier] = time24h.split(" ");

//   let [hours, minutes] = convertTime12to24.split(":");

//   if (hours === "12") {
//     hours = "00";
//   }

//   if (modifier === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }

//   return `${hours}:${minutes}`;
// };

// let convertedTime = convertTime12to24("1:10 AM");
// console.log(convertedTime);

//ex
const str = "05:25 AM";
const separatedTime = str.split(" ");
const letters = separatedTime[1];
console.log(letters)

//try other ways to extract AM
const hoursAndMinutesWithColumn = separatedTime[0];
const hoursAndMinutes = hoursAndMinutesWithColumn.split(":");
const hour = Number(hoursAndMinutes[0])
const minutes = (hoursAndMinutes[1])
console.log(hour, typeof minutes)

//time homework
//ex
//input will be a 8 symbols in length
//input will be in the format of
//HH:MM PM / AM

//example input 1:

const exampleInputOne = "03:45 AM";
const expectedResultOne = "0345";

//ex input 2:
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
  return "0000";
};
console.log("Testing with 03:45 AM", convertToMilitaryTimeFormat("03:45 AM"));
console.log("Testing with 08:00 AM", convertToMilitaryTimeFormat("08:00 AM"));
console.log("Testing with 12:00 AM", convertToMilitaryTimeFormat("12:00 AM"));
console.log("Testing with 02:30 PM", convertToMilitaryTimeFormat("02:30 PM"));
console.log("Testing with 10:00 PM", convertToMilitaryTimeFormat("10:00 PM"));
console.log("Testing with 12:00 PM", convertToMilitaryTimeFormat("12:00 PM"));
//