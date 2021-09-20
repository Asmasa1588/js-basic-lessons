//THIS  & functions
const yourEmployeeSalary = function (someParameter) {
  return `${this.name} is earning $${this.salary}. ${
    someParameter ? "He is out of the company" : "we will promote him"
  }`;
};

const dogEmployee = {
  name: "Jupiter",
  salary: 50000,
  yieldSalary: yourEmployeeSalary,
};
const catEmployee = {
  name: "Gypsy",
  salary: 150000,
  yieldSalary: yourEmployeeSalary,
};
const employee = {
  name: "John",
  salary: 100000,
  yieldSalary: yourEmployeeSalary,
};
console.log(catEmployee.yieldSalary(false));

//example
//Binding
// is changing the THIS method

const methodOutOfContext = catEmployee.yieldSalary;
console.log(yourEmployeeSalary.bind(dogEmployee)(false));

//question: why did we use result w/o the this above?
//THIS keyword only works when it being called over an object.

//ex 2 Binding
console.log(dogEmployee.yieldSalary.bind(catEmployee)(false));
//homework
//watch video.
//next class. questions.
