/**
 * Represents an array containing information about employees in a given company.
 */
const employeesArray = [
  {
    employeeDept: "Finance",
    name: "John",
    salary: 50000,
    state: "PA",
  },
  {
    employeeDept: "lab",
    name: "Jessica",
    salary: 58000,
    state: "TX",
  },
  {
    employeeDept: "Pay Roll",
    name: "Kevin",
    salary: 60000,
    state: "NY",
  },
  {
    employeeDept: "IT",
    name: "Mike",
    salary: 70000,
    state: "CT",
  },
];

/**
 * fetchData is responsible of making something similar to a request.
 * It goings to make a promise out of the `employeesArray` array
 * @returns a Promise
 */
const fetchData = () => {
  return Promise.resolve(employeesArray);
};

/**
 *
 * @param {*} previousEmployeeWithTheHighestSalary
 * @param {*} currentEmployee this parameter will represent each one
 * of the employees from the `employeesArray`.
 * @returns object, which is the employee with the highest salary
 */
const getTheEmployeeWithTheHighestSalary = (
  previousEmployeeWithTheHighestSalary,
  currentEmployee
) => {
  if (previousEmployeeWithTheHighestSalary.salary > currentEmployee.salary) {
    return previousEmployeeWithTheHighestSalary;
  }
  return currentEmployee;
};

/**
 * Represents a `async` function to handle the process of resolving data
 * from a given promises and to log out the employee with the highest salary
 */
const handleRequest = async () => {
  const receivedEmployeesData = await fetchData();
  console.log(receivedEmployeesData);
  const employeeWithTheHighestSalary = receivedEmployeesData.reduce(
    getTheEmployeeWithTheHighestSalary
  );

  /**
   * The final result is being outputted below
   */
  console.log({ employeeWithTheHighestSalary });
};

/**
 * Rule 100 of Valentin:
 * Whenever you have declared a function such as the `handleRequest` one,
 * do NOT forget to executed that function!
 * This is exactly of what is happening on the below line! We are
 * calling the `handleRequest` function. Nothing will happen if we don't
 * call it, as we are doing at the moment. You could say that a function
 * is completely useless, unless you call it somewhere!
 */
handleRequest();
