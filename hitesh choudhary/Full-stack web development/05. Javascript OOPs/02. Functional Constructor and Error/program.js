//* Functional Constructor and Errors

//? Functional Constructor
/**
 *  The `Functional Constructor` creates Function Objects.
 */

//* Let's understand Functional Constructor with example

/**
 * Here we are creating Constructor function which create the Objects
 * @param {*} firstname
 * @param {*} lastname
 * @param {*} age
 * @param {*} birthdate
 */
//* First Functional Constructor

function Person(firstname, lastname, age, birthdate) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.birthdate = birthdate;
  this.personInfo = function () {
    console.log(
      `Person firstname=${this.firstname}, lastname=${this.lastname}, age=${this.age} and birthdate=${this.birthdate}`,
    );
  };
}

//* Second Functional Constructor

function Car(company, model, name) {
  this.company = company;
  this.model = model;
  this.name = name;
  this.carInfo = function () {
    console.log(
      `Car company = ${this.company}, model= ${this.model} and name = ${this.name}`,
    );
  };
}

//* With the help of `new` keyword we can invoke the constructor function to create Functional Objects

const swiftDezire = new Car(
  "maruti suzuki",
  2025,
  "maruti suzuki Swift Dezire",
);

console.log(swiftDezire);
console.log(swiftDezire.__proto__); // Output: {}
swiftDezire.carInfo();

//* case create functional constructor without
const safari = Car("tata", 2026, "tata Safari");
// safari.carInfo();
console.log(safari); // Output: undefined
/**
 * When we don't use new keyword than Functional Constructor Object is not invoke and undefined as output
 */

/**
 * ? Explanation of Car Functional Constructor
 * ! When we create Functional Constructor than We Start our Function identifier is starting with Uppercase character
 *  function Car(name, company, model) {
 *   this.name = name;
 *   this.model = model;
 *   this.company = company;
 * *  `this` keyword here refer to the newly created object with the help of `new` keyword which invoked the Constructor function
 * * This `new` keyword and `this` keyword are linked to each other.
 *   const safari = new Car("safari", "tata", "2020")
 *   console.log(safari)
 *   Output: {name:"safari", company:"tata", model:2020}
 * }
 */

//* Third Functional Constructor
function Tea(teaType) {
  this.teaType = teaType;
  this.describe = function () {
    return `this is a cup of ${teaType} tea`;
  };
  this.preparing = function () {
    return `Preparing ${teaType} tea`;
  };
}

const teaOne = new Tea("lemon");
console.log(teaOne);
const teaOneDescribe = teaOne.describe();
console.log(teaOneDescribe);
/**
 * Output: this is a cup of lemon tea
 */
const teaOnePreparing = teaOne.preparing();
console.log(teaOnePreparing);
/**
 * Output: Preparing a lemon tea
 */

//* Fourth Functional Constructor
function Animal(name, species, scientificName) { 
 //* We want to create check if the user use the new keyword to create functional constructor or not !!! 
 if(!new.target) {
    //! Than we can use Error Object to throw new error 
    throw new Error("Animal Object must be created with new keyword"); 
    /** 
     * * throw -> `throw` statement throws the user-defined exceptions   
     * *  new  -> The  `new` keyword operator let developers creates an instance of a user-defined Object type or of one of the inbuilt object types that the constructor function. 
     * * Error() -> Error Objects are thrown when error occurs 
     */
 }
  this.species = species;
  this.name = name;
  this.scientificName = scientificName;
  this.info = function () {
    console.log(
      `${this.name} having species of ${this.species} and scientific name ${this.scientificName}`,
    );
  };
}

const tiger = new Animal("tiger", "large cat", "panthera tigris");
console.log(tiger); 
tiger.info(); 

const lion = new Animal("lion", "large cat", "panthera leo"); 
console.log(lion);
lion.info(); 

// const cat = Animal("cat", "domestic cat", "Felis catus" ); 
// console.log(cat); 
/** 
 * ? Output of the above commented code:   
 * throw new Error("Animal Object must be created with new keyword"); 
 */