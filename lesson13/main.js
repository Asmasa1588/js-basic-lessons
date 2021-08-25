//data type
//example for numbers

const number = 100;
const negativeNumber = -50;
const pi = 3.14;
// this is the same Math.PI
const incorrectResult = 1.9999 + 1;
//incorrect result will be incorrect due to JS precision
console.log(number.toExponential());
const numberAsTheString = "8.5";
console.log({ numberAsTheString });
const convertToNumberFirstWay = Number("9.2");
console.log({ convertToNumberFirstWay });
// 2nd ex

const convertToNumberSecondWay = +"7.1";
console.log({convertToNumberSecondWay})

// ex for string
const str = "some random string";
const strLength = str.length
console.log({strLength});

const strFirstChar = str[0];
const strSecondChar = str[1];
const strFourthChar = str[3];
const strLastChar = str[strLength -1];
console.log({
    strFirstChar, strSecondChar, strFourthChar,strLastChar
});
//substring will return new substring starting from the first parameter inclusively all up to the second parameter exclusively 
const substring = str.substring(2, 4);
console.log({substring});

const substringWithOneParameter = str.substring(1);
console.log({substringWithOneParameter});

// substr will return a substring starting from a particular index and the second parameter specifies 
//how many letters we would like to take after the provided index.

const substr = str.substr(2, 4);
console.log({substr})

const indexOf = str.indexOf("random");
console.log({indexOf})

const someUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr";
const indexOfParticularPage = someUrl.indexOf(".org");
console.log({indexOfParticularPage})
const subStringOfParticularPage = someUrl.substr(indexOfParticularPage +5);
console.log({subStringOfParticularPage})

//Homework:
//"Jupiter is playing"
//"The github url-https://github.com/Asmasa1588 is my github profile"
//extract the url.  
//find index of - symbol
//find of

const myUrl = "url-https://github.com/Asmasa1588";
const pathOfMyPage = myUrl.indexOf("h");
console.log({pathOfMyPage})
const subStringOfMyPage = myUrl.substr(pathOfMyPage);
console.log(subStringOfMyPage)
const indexOfDash = myUrl.indexOf("-")
console.log({indexOfDash})
//const findMyPhone = phoneNumber.indexOf("334");
//const subStringOfFindMyPhone = phoneNumber.substr(findMyPhone);

// advanced method
const englishSentenceContainingUrl = "The github url-https://github.com/Asmasa1588 is my github profile";
const urlPrefixIndex = englishSentenceContainingUrl.indexOf("url-") +4;
console.log({urlPrefixIndex});
const emptySpaceAfterUrl = englishSentenceContainingUrl.indexOf(" ", urlPrefixIndex);
console.log({emptySpaceAfterUrl});
const extractedUrl = englishSentenceContainingUrl.substring(urlPrefixIndex, emptySpaceAfterUrl);
console.log({extractedUrl});

// examples with the INCLUDE 

const isContainingMyUserName = englishSentenceContainingUrl.includes("Asmasa1588");
console.log({isContainingMyUserName});

const searchResult = englishSentenceContainingUrl.match(/https[:0-9A-Za-z/.]+/)[0]
console.log({searchResult})

// Homework
//"Jupiter is playing"
//1 verify if the above string contains my pet name.(const --- )
//2 consider the following english sentence 
//my phone number is 334 and feel free to call me
//regular expression
// extract the phone number.(rglr expression)
//3 aabbcc123xyz  this should be inverted in the final result zyx321ccbbaa. it should reverse the provided parameter /string. but it must be a function. 

const petNameString = "Jupiter is playing";
const petNameIncludes = petNameString.includes("Jupiter");
console.log({petNameIncludes})
///const substring = str.substring(2, 4);
//console.log({substring});
/*const phoneNumber = "my phone number is 334 and feel free to call me";
const findMyPhone = phoneNumber.indexOf("334");
console.log({findMyPhone})*/

const phoneNumber = "my phone number is 334 and feel free to call me";

const words = phoneNumber.split(' ');
console.log(words[4]);

const searchResultOfPhoneNumber = phoneNumber.match(/[0-6]+/)
console.log({searchResultOfPhoneNumber})

/*function reverseString(s){
    return s.split("").reverse().join("");
}
reverseString("aabbcc123xyz");*/

const wordToReverse = "aabbcc123xyz";
//const reverseWord = wordToReverse.split("").reverse().join("");
const reverseString = (str)=> {
    return str.split("").reverse().join("")
};
console.log("Final reversed word  is:", reverseString(wordToReverse));

