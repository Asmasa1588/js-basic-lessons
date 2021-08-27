// DATA TYPES part 2
//boolean
// booleans are TRUE or FALSE

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


// a.b.c

const threeLevelDeepObject = {
    a:{
        b: {
            c: {
                someProperty: "this is the value of the deepest property",
            }
            
        }
    }
}
console.log(threeLevelDeepObject)
console.log(threeLevelDeepObject.a.b.c)

//Example

const company = {
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
console.log(company.employees[0].address.country);

//HomeWork
//create an object that multiple properties.// value => arrays, nested objects, numbers, strings, booleans
//homework 2
//create an object which contains 3 properties, and every property has some string as its value.
//log every property of that object. separate. 
//
// can object have a Function?? 