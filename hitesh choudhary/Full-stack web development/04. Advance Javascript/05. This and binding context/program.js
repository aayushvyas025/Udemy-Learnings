//* This and binding Context
/**
 * The `this` keyword refers to the value determined by the current execution context in which the function is called.
 */

const person = {
  firstName: "Aayush",
  lastName: "Vyas",
  age: 27,
  greet: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and i'm ${this.age} year old.`,
    );
  },
}; 

//* Here this give the  `greet()` which refer to this.firstname and this.lastname context which is 
person.greet();  

//* Let's pass this function reference to another function 
const greetTwo = person.greet; 
greetTwo();  // Output: Hello, my name is `undefined` and i'm `undefined` year old 

//* We have to bind the function with object so we can pass as reference 
const bindGreet = person.greet.bind({firstName:"Aayush", lastName:"Vyas", age:27});  
// this `bind` function will bind the methods of the object with other object so we can pass as reference
bindGreet(); 

