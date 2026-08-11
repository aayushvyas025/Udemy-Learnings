//* Prototypal Inheritance in Javascript

/**
 * * We previously understand that javascript is prototype based programming language so, we can perform the prototypal inheritance chaining of it.
 * we access through prototype of the function constructor or object dunder proto
 *
 */

function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

// Here we access the prototype object which help to create prototypal inheritance of our objects.

Person.prototype.greet = function () {
  console.log(
    `Hello, my name is ${this.firstname} ${this.lastname} and i'm ${this.age} year old.`,
  );
};

const personOne = new Person("Aayush", "Vyas",27); 
console.log(personOne); 
personOne.greet();

const personTwo = new Person("John", "Doe", 50); 
console.log(personTwo); 
personTwo.greet(); 

