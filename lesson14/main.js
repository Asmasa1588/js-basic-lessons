// DATA TYPES part 2
//boolean
// booleans are TRUE or FALSE
/*
const isEqual = 10 === 10;
console.log({isEqual});
const someName ="";
const stringToBoolean = !! someName;
console.log({stringToBoolean})

const stringToBooleanSecondVersion = Boolean(someName);
console.log({stringToBooleanSecondVersion})

//OBJECTS
//are a set of key and value pairs 

const myFirstObject = {
    phone: "3356",
    age: 30,
}
console.log(myFirstObject)

const bigObject = {
    thisIsProperty: "this is the value of the property",
    anotherProperty: {
        propertyOfTheNestedObject: "this is the value of nested property",
    }
}
console.log({bigObject})
*/

// a.b.c

/*const threeLevelDeepObject = {
    a:{
        b: {
            c: {
                
                
                
                    someProperty: "this is the value of the deepest property",
            }
            
        }
    }
}
console.log(threeLevelDeepObject)
console.log(threeLevelDeepObject.a.b.c)*/

//Example

/*const company = {
    name: "apple",
    isBankrupt: false,
    address: {
        country: "USA",
        street: "wall st",
        number: 100,
    },
    employees: [
        {
            name:"Jupiter",
            age: 10,
            salary: 100000,
            address: {
                country:"Canada",
                street:"Dog alley",
                number: 20,

            },
        },
        {
                 name:"Gypsy",
            age: 30,
            salary: 9000,
            address: {
                country:"Canada",
                street:"Cat alley",
                number: 15,

            },
        },
    ]  
}
console.log(company.employees[0].address.country);*/

//HomeWork
//create an object that multiple properties.// value => arrays, nested objects, numbers, strings, booleans

/*const jaimieClassStudentsHomework = {
    name:"Myles",
    homeworkSubmitted: true,
    grades: "B+",
    attendance: [
        {
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: true,
            friday: true,
        }
    ]
}*/

const jaimieClassStudents = {
  students: [
    {
      name: "Myles",
      homeworkSubmitted: true,
      grades: "B+",
      attendance: [
        {
          monday: true,
          tuesday: true,
          wednesday: false,
          thursday: true,
          friday: true,
        },
      ],
      name: "bobby",
      homeworkSubmitted: true,
      grades: "C",
      attendance: [
        {
          monday: true,
          tuesday: false,
          wednesday: false,
          thursday: true,
          friday: true,
        },
      ],
      name: "Lily",
      homeworkSubmitted: false,
      grades: "B",
      attendance: [
        {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: false,
          friday: false,
        },
      ],
    },
  ],
};
const keys = Object.keys(jaimieClassStudents);
for (key of keys) {
  console.log({ key });
}
//console.log(jaimieClassStudents.name)
//homework 2
//create an object which contains 3 properties, and every property has some string as its value.
//log every property of that object. separate.

const cars = {
  favColor: "Black",

  favCarNames: [
    {
      carName: "Toyota",
      model: "Solara",
      price: 10000,
      color: "Blue",
    },

    {
      carName: "Honda",
      model: "Civic",
      price: 12000,
      color: "Red",
    },
    {
      carName: "Fords",
      model: "F150",
      price: 20000,
      color: "Black",
    },
  ],
};
for (currentCar of cars.favCarNames) {
  //console.log(`(He bought a, ${cars.color + "  " + cars.carName[1]}.`);
  console.log(`(He bought a, ${currentCar.color + " " + currentCar.carName}.`);
}
const numberOfFavCarNames = cars.favCarNames.length;
numberOfFavCarNames;

console.log(
  `The name of the last car is - ${
    cars.favCarNames[numberOfFavCarNames - 1].name
  }`
);

// can object have a Function??

const math = {
  pi: 3.14,
  multiply: (a, b) => {
    return a * b;
  },
  subtract: (a, b) => {
    return a - b;
  },
};
console.log(math.pi);
console.log(math.multiply(2, 10));

const objectWithProperties = {
  firstProperty: "first",
  secondProperty: "second",
  thirdProperty: "third",
};
for (property of Object.keys(objectWithProperties)) {
  console.log({ property });
}
const entries = Object.entries(objectWithProperties);
entries;
for (entry of Object.entries(objectWithProperties)) {
  const property = entry[0];
  const value = entry[1];
  console.log({ property, value });
}

//HOMEWORK
//extract properties from the below object.
//print out the left side of the object.
const homeworkObject = {
  firstKey: 10,
  secondKey: 20,
};
for (const [keys, value] of Object.entries(homeworkObject)) console.log(keys);
console.log({ homeworkObject });
