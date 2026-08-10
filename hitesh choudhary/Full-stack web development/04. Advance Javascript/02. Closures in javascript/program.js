//* Closures in Javascript

/**
 * * What is Closures ?
 *  - Closures is a mechanism in the function which have access of local variables of it's outer scope when the outer scope or parent scope function is executed
 *
 *  -  It stored those local variables as the memory in the mind and executed with it.
 *
 *  - This is due to javascript lexically scoped language, meaning that variable visibility and accessibility determined entirely by the location of the variables and blocks with-in  the source code at compile time.
 *
 */

//? Example of Closures
/**
 * Best example of closures is counter function :-
 *
 */

function counter() {
  let count = 0; // This is local variable of counter function
  return function () {
    // this return function have the access of count local variable.
    console.log(++count);
  };
}

const increment = counter();

for (let idx = 0; idx < 100; idx++) {
  increment();
}


