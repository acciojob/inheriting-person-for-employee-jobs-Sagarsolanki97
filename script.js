// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
	 greet(){
		 console.log(`Hello, my name is ${name}, I am ${age} years old.`)
	 }
}

// Person prototype method
Person.greet ();

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