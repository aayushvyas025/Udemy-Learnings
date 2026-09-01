//* Masterclass on prototypes in Javascript
// - Every programming language offers the way of writing code like object oriented programming, functional programming, procedural programming etc.
//! - Javascript is based on prototype programming language under the hood but another programming language provides the object oriented programming features
// - So javascript developers also create the syntactical sugar syntax of `Object Oriented Programming` features with it's method to it so every other language developers also feel not complex to build software in it under the hood javascript is prototype based only.

//? What is Object Oriented Programming
/**
 * - The `Object Oriented Programming` is programming paradigm to write and manage our software with more scalability and easy to maintain bigger level of software.
 * - `Object Oriented Programming` have two main essential components
 *    1. Classes             2. Objects
 * * Classes
 * Classes are the blueprint of objects and decide the properties and methods are implemented for our objects.
 * * Objects
 * Objects are the instance of our classes and they are real entity  which interact with each other.
 */

/**
 * ! Javascript under the hood is prototype based language
 * - Javascript is prototype based or simply pure object based language but the developers who comes from other programming languages experienced not get some difficulty to create application faster
 * - Javascript developers added the syntactical sugar of `Object Oriented Programming` so that all the features and methods feels like the traditional Object-Oriented Programming language but under the hood it's work as prototype based only this classes are wrapper over the prototypes
 *
 * * Understand with below flow chard diagram
 *
 *         Prototype_____________________________________________________________________________________                                                                                                                                  |
 *        |                                                                                    |
 *        |                                                                                    |
 *        |                                                                                    |
 *        |___________________ Javascript Programming  ---------------------------- Object Oriented Programming
 *                                Language                                               Paradigm
 * * Object Oriented Programming is sugar syntactical syntax over the prototype
 */

//? Prototype

//* What is prototype ?
/**
 * - Prototype is inbuilt javascript properties which helps to inherit properties and methods from each other objects.
 * - This prototype is also Object which also have it's own prototype to add or inherit the methods from other objects we can create prototypal inheritance chain.
 */

//* Understand the prototype inheritance with the examples 

// Example One 

const computer = { ram: 32, hardDisk:1000 };
const lenovo = { screen: "HD" };
const tomHardware = {};
/**
 * Here we create the three objects
 * computer = {cpu:32, ram:16}
 * lenovo = {screen:"HD"}
 * tomHardware = {};
 */

console.log(` Computer `, computer);
console.log(` Lenovo `, lenovo);
console.log(`Tom Hardware `, tomHardware);

console.log(`Accessing dunder proto of computer object`, computer.__proto__);
/**
 ** Output in Node Env :
 * Accessing dunder-proto-dunder of computer object [Object: null prototype] {}
 * Here dunder proto is null
 *
 * * Output in Browser Env:
 * We can see the prototype and dunder-proto-dunder clearly with properties
 *
 * {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
 *    constructor: ƒ Object()
 *    hasOwnProperty: ƒ hasOwnProperty()
 *    isPrototypeOf: ƒ isPrototypeOf()
 *    propertyIsEnumerable: ƒ propertyIsEnumerable()
 *   toLocaleString: ƒ toLocaleString()
 *   toString: ƒ toString()
 *    valueOf: ƒ valueOf()
 *    __defineGetter__: ƒ __defineGetter__()
 *    __defineSetter__: ƒ __defineSetter__()
 *    __lookupGetter__: ƒ __lookupGetter__()
 *    __lookupSetter__: ƒ __lookupSetter__()
 *    __proto__: (...) //* This dunder proto have it's own dunder-proto-dunder which is null default
 *    get __proto__: ƒ __proto__()
 *   set __proto__: ƒ __proto__()
 */

// here we are adding the computer object to lenovo dunder-proto-dunder
lenovo.__proto__ = computer;
// here we add the fetchSpecification method to it's dunder proto dunder  
lenovo.__proto__.fetchSpecification = (ram, hardDisk) => {
  console.log(`This machine have ${ram}gb RAM and ${hardDisk}gb Hard disk.`);
};

lenovo.fetchSpecification(lenovo.ram, lenovo.hardDisk);  

// Now we are accessing assigning the lenovo object all methods to tomHardware object dunder proto dunder 

tomHardware.__proto__ = lenovo; 
console.log(tomHardware.__proto__);  
// Output : { screen: 'HD' } 
console.log(tomHardware.__proto__.__proto__)  
// Output: { ram: 32, hardDisk: 1000, fetchSpecification: [Function (anonymous)] }
//! Here with the help of dunder proto dunder we are chaining prototypal inheritance with each other objects. 

//* Let access the properties of tomHardware and assign them.  
tomHardware.ram = 16; 
tomHardware.hardDisk = 500; 
tomHardware.screen = "4K";
tomHardware.fetchSpecification(tomHardware.ram, tomHardware.hardDisk);
console.log(tomHardware); 

/** 
 * ! Explanation of this prototypal Inheritance 
 * 
 **  const computer = { ram: 32, hardDisk:1000 };  
 *  - This computer is first object created in our memory it's __proto__ points towards the global Object Prototype. 
 * 
 *?  Prototype Point 
 *? - computer __proto__ ---> Object prototype  --> null
 * 
 * *  const lenovo = {screen:'HD'}  
 *  - This lenovo is second object created in our memory it's __proto__ points towards the global Object Prototype 
 *  - But when we assign the lenovo.__proto__ = computer  and added fetchSpecification method  than , its __proto__ points out to the computer __proto__ and global Object Prototype. 
 * 
 * ? Prototype Point  
 * ?  lenovo --> computer -->  Object prototype --> null
 *  
 * * const tomHardware = {} 
 * - This is the third object created in our memory it's __proto__ points towards the global Object Prototype. 
 * - again we  assign the tomHardware.__proto__ = lenovo, than it's __proto__ points towards lenovo ___proto___, computer __proto__ and global Object prototype. 
 * 
 * ? Prototype point 
 * ? tomHardware --> lenovo --> computer --> Object prototype --> null 
 */ 


//* Example Two 
let genericCar = {tyres:4, engine:"", color:"", airConditioner:false}; 

let teslaCar = {
    selfDriving:true, 
}; 

let fordCar = {}; 

/** 
 * ? Object.setPrototypeOf() 
 *  - This method set the prototype of object to another object. 
 ** - Object.prototypeOf(Obj, prototype)       
 *  - Here in first parameter we set the object to assign prototype  and second is Object which assign to prototype 
 */

 Object.setPrototypeOf(teslaCar, genericCar); 

 console.log(teslaCar.__proto__); 
 /** 
  * ? Output :  
  * { tyres: 4, engine: '', color: '', airConditioner: false }
  */ 

 /** 
  * ? Object.getPrototypeOf() 
  *  - This method get the prototype of object. 
  * * - Object.getPrototypeOf(obj)  
  * 
  */
 console.log(Object.getPrototypeOf(teslaCar)); 
 /** 
  * ? Output :  
  * { tyres: 4, engine: '', color: '', airConditioner: false }
  */ 

 /** 
  * ? Object.hasOwnProperty()  
  *   - This method check the object have it's own property or not if it's have than it will return boolean value 
  * * - Object.hasOwnProperty('<property-name>')   
  *   - Always pass the property in string type   
  */ 

//* genericCar Object 
console.log(genericCar.hasOwnProperty('tyres')); // Output: true 
console.log(genericCar.hasOwnProperty('toString')); // Output: false because it's inherit from the Global Object property 

//* teslaCar Object 
console.log(teslaCar.hasOwnProperty('selfDriving')); // Output: true 

//* fordCar Object 
console.log(fordCar.hasOwnProperty('tyres')); // Output: false 




