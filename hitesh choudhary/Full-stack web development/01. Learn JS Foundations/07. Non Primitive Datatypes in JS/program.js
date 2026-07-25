//* Non Primitive Datatypes in Javascript
// - Non-primitives are those  data types which are derived from primitives which are also called Derived Datatype
// - Non-primitives are more complex data type to store in our program.
// - Non-primitive data types are mutable
// - In Javascript, non-primitive data type is only Objects as a broader perspective.

//? Objects
// - Object is a Data structure which helps to store data in key-pair value form.
// - It's store more than single data (primitive) in key-pair value

// Example of Object
const userInfo = {
  // Here we define the key-value pair
  firstName: "Aayush",
  //   key    :  value
  lastName: "Vyas",
  //  key   :  value
  isLoggedIn: false,
  // key   : value
  //! In object we can create the string key or if we create key-with another primitive datatypes that also consider as string only
  graduation: "B-tech in Information Technology",
  "graduation-year": 2022,
};

console.log(userInfo);
console.log("userInfo type", typeof userInfo);

//? How to access the object property
// We have two methods to access key-pair value
// first is '.' dot operator  with the help of dot operator we can access key of our object
console.log(userInfo.firstName); // Output: Aayush
console.log(userInfo.lastName); // Output: Vyas
console.log(userInfo.isLoggedIn); // Output: false
// second is bracket method [ ]  to access key-pair value dynamically
console.log(userInfo["firstName"]);
//! console.log(userInfo[lastName]);  Always pass key name in string in bracket notation otherwise it give error to us.
//! console.log(userInfo.graduation-year)  This type of property we can't access with dot-operator we have to use bracket notation
console.log(userInfo["graduation-year"]);

//? How we can create the new key-pair value  property
// same two methods
// first approach : dot operator
userInfo.isAdult = true;

console.log(userInfo);

userInfo.city = "Indore";

// second approach: bracket notation
userInfo["state"] = "Madhya Pradesh";
userInfo["country"] = "India";

console.log(userInfo);

//? How we can update the object
// first approach: dot operator
userInfo.isLoggedIn = true;
userInfo.city = "Bhopal";
//* This update operation state that non-primitive datatype are mutable we can change the original data.
console.log(userInfo);

//? Is non-primitives are mutable ???
//  - Non-primitive are mutable and it's change the original data also.
//  - We can pass non-primitive type as reference also.

const userInfoSecond = userInfo;

console.log("First Object", userInfo);
console.log("Second Object", userInfoSecond);

//* Let's update both the objects
// obj 1
userInfo["graduation-year"] = 2021;

console.log("first object", userInfo);
console.log("second object", userInfoSecond);

// obj 2
userInfoSecond.isLoggedIn = false;

console.log("first object", userInfo);
console.log("second object", userInfoSecond);

//? Some Inbuilt Objects in Javascript

//* Math Object
const mathsOpr = Math;
// Math Object for mathematical operations
console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT2); // 1.4142135623730951

//* Date Object
let dateObj =  Date(); 
console.log(dateObj); 

dateObj = new Date(); 
console.log(dateObj); 
