// FOR IN loop
//to look for the keys of the properties of an object.
//for of loop used for Arrays.
// for in loop used for object to iterating the left side (the object's properties)

const obj = {
  name: "Gypsy",
  status: "pet",
  color: "white and gray",
  unknownProperty: "some important information",
  "non-typical-property": "this is valid as well",
};
for (property in obj) {
  console.log({ property });
  console.log("--", obj[property]);
}
console.log(obj.name);
console.log(obj["name"]);
console.log(obj["non-typical-property"]);

//Homework
//to find the sum of all of the useful properties
//iterate each property, check it contains useful and if it does, to sum its value
// let sum must be 21 at the end( use IF condition as well)
//
let sum = 0;
const homeworkObject = {
  uselessProperty: 10,
  usefulProperty1: 1,
  usefulProperty2: 20,
  anotherUselessProperty: 100,
};

for (let property in homeworkObject) {
  console.log(property, property.includes("useful"));
  if (property.includes("useful")) {
    sum = sum + homeworkObject[property];
  }
}
console.log(sum);

// to do: plz explain what is JSON on our next lesson
//it is universal format to send data.
