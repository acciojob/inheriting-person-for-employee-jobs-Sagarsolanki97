// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person prototype method
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor function to set name and age properties
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Employee prototype method
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Create an Employee object and call its methods
const employee = new Employee("Alice", 30, "Manager");
employee.greet(); // Output: "Hello, my name is Alice, I am 30 years old."
employee.jobGreet(); // Output: "Hello, my name is Alice, I am 30 years old, and my job title is Manager."
