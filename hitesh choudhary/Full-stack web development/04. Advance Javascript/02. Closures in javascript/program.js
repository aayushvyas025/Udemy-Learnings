//* Closures in Javascript

/**
 * * What is Closures ?
 *  - Closures is created when the function retains the access of local variables of it's outer scope even the outer scope function is executed.
 *
 *  -  The inner function maintains a reference of the variables it uses from its surrounding lexical environment. 
 *
 *  - This is due to javascript lexically scoped language, meaning that variable visibility and accessibility determined entirely by the location of the variables and blocks with-in  the source code at compile time.
 *
 */

//? Example of Closures
/**
 * Best example of closures is counter function :-
 *
 */

function counterOne() {
  let count = 0; // This is local variable of counter function
  return function () {
    // this return function have the access of count local variable.
    console.log(++count);
  };
}

const increment = counterOne();

function counterTwo() {
    let count = 100; 
    return function() {
       if(count >= 0) {
           console.log(--count); 

       }
    }
}

const decrement = counterTwo();
for(let number = 0; number > 0; number++) {
    decrement(); 
}


