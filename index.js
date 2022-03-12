// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
  };
  
  function updateEmployeeWithKeyAndValue(employee, name, Sam) {
    // Alternate using ES6 Spread operators:
    // return { ...driver, ...{ [key]: value } }
    return Object.assign({}, employee, { [name]: Sam });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Andy) {
    employee[name] = Andy;
  
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, name) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    const newObj = Object.assign({}, employee);
  
    delete newObj[name];
  
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
  
    return employee;
  }
  
  