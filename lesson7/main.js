// Difference between CONST & LET
//most of the time we use CONST
//A const variable cannot be updated.
//we will use LET only when we need a variable which needs to be changed.
console.log(constantNumber);
let constantNumber = 3.14;
constantNumber = 10;
constantNumber = 8;
console.log(constantNumber);
//If we change LET to CONST,on line number 5, it will print out an error
//- TypeError: Assignment to constant variable.
