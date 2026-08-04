//* Classes, Objects and inheritance in javascript

//? What is Object Oriented Programming
/**
 * Object Oriented Programming is a programming paradigm which helps to write our software in classes and objects and easily maintain for larger scalable software
 * * Classes and Objects
 * ? Classes : Classes are the blueprint of our Objects in which we design the properties and methods of it.
 * ? Objects : Objects are the instance of classes and real entity which interact with each other.
 *
 * * But in Javascript, we understand that Objects and classes are just syntactical sugar under the hood works on
 */

// Let's create first car object literal
/**
 * const safari = {
 *        type: "suv",
 *        company: "tata",
 *        model: 2020,
 *        name: "safari",
 *        info: function () {
 *            console.log(
 *   `${this.name} car is ${this.type} type of ${this.company} company and model of ${this.model} year.`,
 *    );
 *   },
 *  };
 *
 * * Print the safari Object
 *   console.log(safari);
 *   safari.info();
 *
 * ! But problem is here is we can't make new instance from it,
 * !  if we do that we have to take help of prototype, prototypal inheritance chain
 *
 */

/* const teslaY = {}; 
 Here we add prototypal chaining, with prototype 
teslaY.__proto__ = safari; 
console.log(teslaY); 

teslaY.name = "tesla Y";
teslaY.company = "tesla"; 
teslaY.type = "midsize suv"; 
teslaY.model = 2026; 
teslaY.isSelfDriving = true; 

teslaY.info();
console.log(teslaY); 
*/

// function Car(name, company, type, model, isSelfDriving) {
//   this.name = name;
//   this.company = company;
//   this.type = type;
//   this.model = model;
//   this.info = function () {
//     console.log(
//       `${this.name} car is ${this.type} type of ${this.company} company and model of ${this.model} year.`,
//     );
//   };
// }

// const safari = new Car("safari", "tata", "suv", 2020, true);
// console.log(safari);
// safari.info();

//* Here we also do with prototype inheritance also.
// Car.prototype.enginePower = "460p"; // Here we access with prototype

// console.log(safari.enginePower);

//? Class and Objects in Javascript

// With example we can understand how, we create classes and objects

/**
 * * Syntax of Class
 * ? class - keyword
 * ? Vehicle <identifier>
 *
 * class <class-identifier>  {
 *    constructor(params)  {
 *           this.params
 *       }
 *
 *     class-method()  {
 *        logic of method
 *       }
 * }
 */

class Vehicle {
  constructor(type, company, model, name, engine) {
    this.name = name;
    this.type = type;
    this.company = company;
    this.model = model;
    this.engine = engine;
  }

  //* Here we don't need to use function keyword it's a syntactical sugar only
  info() {
    console.log(
      `${this.name} car is ${this.type} type of ${this.company} company and model of ${this.model}.`,
    );
  }
}

//* above we create the Vehicle class

/**
 * ? What is Inheritance?
 *
 * - Inheritance is an Object-Oriented Programming (OOP) concept
 *   that allows one object or class to acquire the properties
 *   and methods of another object or class.
 *
 * - It promotes code reusability and reduces code duplication.
 */

//* How we can inherit class from one to another
/**
 * Let understand class inherit from one to each other with example
 */

//! to inherit classes to each other we can use extends keywords
/**
 * ? Syntax of
 */
class Car extends Vehicle {
  enginePowerInfo() {
    console.log(
      `This ${this.name} have this engine ${this.engine} horse-power`,
    );
  }
}

/** 
 * Let's create the objects with Car Class 
 */ 

const safari = new Car("suv", "tata", "a class", "safari","460p");  

console.log(safari);  
safari.info(); 
safari.enginePowerInfo(); 

/**
 * Let's create the object with Vehicle Class 
 */ 

const tesla = new Vehicle("mid-size suv", "tesla", "Y", "tesla Y", "350p"); 

/**
 * Let access the .enginePowerInfo() 
 */
tesla.enginePowerInfo(); 
//! It give error that is not a function in Vehicle class 
