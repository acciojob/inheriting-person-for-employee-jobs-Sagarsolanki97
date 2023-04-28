// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inheriting Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Fixing the constructor property on Employee prototype
Employee.prototype.constructor = Employee;

// Adding jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
