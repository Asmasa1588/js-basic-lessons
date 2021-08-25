console.log("hello world");
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => {
    //debugger;
    console.log(response);
    return response.json()}).then(responseInJson =>{
    console.log(responseInJson);
    const imageElement = document.getElementById("dog-image")
    imageElement.src= responseInJson.message
});
// first time we use .json 
// what are functions and how do we use them?
// function expression, arrow function
// what are the arrow functions?
// difference b/w const and let?
// js objects
// what is document.getElementBy.
// arrays.
// create an application, https://www.boredapi.com/api/activity 
// activity, price, participants.

// function
function sum(a, b){
    const result = a + b;
    return result;
}
console.log("the sum of 2 and 1 is " , sum(2, 1));
const resultFromExecutingTheSumFunction = sum(23, 37);
const arrayOfElements = document.getElementsByClassName("sum-result");
const firstDivElement =  arrayOfElements[1];
console.log("sumResultContainer" , firstDivElement);
firstDivElement.innerHTML = resultFromExecutingTheSumFunction;
// when we have a given variable, for ex, num. 
//num++ will increminet the num variable by 1.
// num+= 7; will incr num variable by 7.  
const hundradNumArray = [];
for (let i=0; i < 100; i++){
    hundradNumArray.push(i+1);
}
console.log("hundradNumArray" , hundradNumArray);
console.log("The second last element ", 
    hundradNumArray[hundradNumArray.length-4] )
//