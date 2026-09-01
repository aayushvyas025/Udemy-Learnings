//* This and binding Context
/**
 * The `this` keyword refers to the value determined by the current execution context in which the function is called.
 */

const person = {
  firstName: "Aayush",
  lastName: "Vyas",
  age: 27,
  //? function member type method
  greet() {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and i'm ${this.age} year old.`,
    );
  },
};

//* Here this give the  `greet()` which refer to this.firstname and this.lastname and this.age context which is
person.greet();

//* Let's pass this function reference to another function
const greetTwo = person.greet;
greetTwo(); // Output: Hello, my name is `undefined` and i'm `undefined` year old

//* We have to bind the function with object so we can pass as reference
const bindGreet = person.greet.bind({
  firstName: "Aayush",
  lastName: "Vyas",
  age: 27,
});
// this `bind` function will bind the methods of the object with other object so we can pass as reference
bindGreet();

//? call and apply method

/**
 * * call method
 *  - The call() method allows us to explicitly set the this value for a function when invoking it.
 *
 * ? syntax of call
 *  .call(thisValue<Object>, argumentsOne, argumentTwo, argumentThree,....)
 */

const personInfo = {
  name: "Aayush Vyas",
  graduated: true,
  degree: "B.Tech in Information Technology",
  university: "Medicaps University",
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",
};

// function introduceUser() {
//   console.log(
//     `User name is ${this.name} from ${this.city} in ${this.state}, ${this.country}, and i'm completed ${this.degree} from ${this.university} `
//   );
//  }

//* Here we using this context for the another to call function in it.
// introduceUser.call(personInfo);
/**
 * * .call( ) method is set the this execution context of introduceUser method to personInfo method.
 */

/**
 * * apply method
 * - apply method, is also did the same task create the execution task of it.
 */

function introduceUser() {
  console.log(
    `User name is ${this.name} from ${this.city} in ${this.state}, ${this.country}, and i'm completed ${this.degree} from ${this.university} `,
  );
}

 introduceUser.apply(personInfo, [
  "Aayush Vyas",
  "Indore",
  "Madhya Pradesh",
  "Indore",
  "Btech in Information Technology",
  "Medicaps University",
]);  

/** 
 * ! Difference between call, apply and bind methods 
 * *  - bind method will bind the context of this function to refer the context 
 * *  - call and apply method will create the explicitly the `this` set the `this` value for a function when invoking it.  
 */ 



