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
  console.log("-", normalTimeFormat);
  const splittedTime = normalTimeFormat.split(" ");
  const digitsPortion = splittedTime[0];
  digitsPortion;
  const amPmPortion = splittedTime[1];
  amPmPortion;
  const hoursAndMinutes = digitsPortion.split(":");
  const hours = hoursAndMinutes[0];
  hours;
  const minutes = hoursAndMinutes[1];
  minutes;
  if (amPmPortion === "AM") {
    const normalizeHour = hours === "12" ? 0 : hours;
    //return `${hours}${minutes}`;
    return `${normalizeHour}${minutes}`;
  } else if (amPmPortion === "PM") {
    //to do
    const convertedToPm = Number(hours) + 12;
    const pmNormalizeHour = convertedToPm === 24 ? 12 : convertedToPm;
    convertedToPm;
    pmNormalizeHour;
    return `${pmNormalizeHour}${minutes}`;
  }
  return "invalid format";
};

console.log("Testing with 03:45 AM", convertToMilitaryTimeFormat("03:45 AM")); //0345
console.log(
  "Testing with 08:00 AM---",
  convertToMilitaryTimeFormat("08:00 AM")
); //0800
console.log("Testing with 12:00 AM", convertToMilitaryTimeFormat("12:00 AM")); //0000
console.log("Testing with 02:30 PM", convertToMilitaryTimeFormat("02:30 PM")); //1430
console.log("Testing with 10:00 PM", convertToMilitaryTimeFormat("10:00 PM")); //2200
console.log("Testing with 12:00 PM", convertToMilitaryTimeFormat("12:00 PM")); //1200
console.log("Testing with 11:00 AM", convertToMilitaryTimeFormat("11:00 AM")); //1100
