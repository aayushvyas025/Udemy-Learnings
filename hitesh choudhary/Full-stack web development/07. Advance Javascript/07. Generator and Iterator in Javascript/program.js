//* Generator and Iterator in Javascript

/**
 * ? Generators
 *  - Generators are special type of function in javascript that can be paused and resumed during their execution context.
 *
 *  - They use the `function*` '* - asterisk '*' syntax and the yield keyword to control the flow of execution.
 *
 *  - When we call a generator function it doesn't execute completely like a regular function instead it return the iterator object.
 *
 *  -  Calling the next() method on the returned iterator advances the generator to the next `yield` statement, and the `yield` becomes the return value of next()
 *
 * ? Syntax of generator
 *  function* <generator-function>  {
 *     yield <value>
 * *   yield keyword helps to resume the execution context
 *     yield <value>
 * *  here also yield resume the execution context
 *     yield <value>
 *    }
 */

//? Example of generator function
function* numberGenerator(number) {
  let iterateValue = 0;
  while (iterateValue <= number) {
    yield iterateValue++;
  }
}

// save the reference of generator function in variable
const numGenerator = numberGenerator(10);

/**
 * ? We pause the execution context of generator function with the next() method.
 */

console.log(numGenerator.next()); // Output: {value: 0, done:false} this stop at first `yield 0`
console.log(numGenerator.next()); // Output: {value:1, done:false} this stop at second `yield 1`
console.log(numGenerator.next()); // Output: {value:2, done:false} this stop at third `yield 2`
console.log(numGenerator.next()); // Output: {value:3, done:false} this stop at fourth `yield 3`
console.log("next yield value", numGenerator.next().value); // Output:  this stop at fifth `yield 4`
console.log("next yield value", numGenerator.next().value); // Output: this stop at sixth `yield 5`
console.log("next yield value", numGenerator.next().value); // Output: this stop at seventh `yield 6`
console.log("next yield value", numGenerator.next().value); // Output: this stop at eight `yield 7`
console.log("next yield value", numGenerator.next().value); // Output: this stop at ninth `yield 8`
console.log("next yield value", numGenerator.next().value); // Output: this stop at tenth `yield 9`
console.log("next yield value", numGenerator.next().value); // Output: this stop at eleven `yield 10`
console.log(numGenerator.next()); // Output: {value:undefined, done:true}

/**
 * ? Iterators
 *  - Iterators are objects that define a sequence and provide a `next()` method to access the next value in the sequence.
 *
 *  - The `next()` method returns an object with two properties
 *      -- `value`: the next value in the sequence.
 *      -- `done`: A boolean that is `true` if the iterator has finished it sequence, otherwise `false`.
 *
 *  -
 *
 *  * Syntax of iterator
 *    function iterator() {
 *      iterable variable;
 *
 *        return {
 *            next:function()  {
 *                     logic of iterable
 *                     which returns object {value:data, done:true/false}
 *                 }
 *          }
 *
 *    }
 */

function iteratorObject(num) {
  let counter = 0;
  return {
    next: function () {
      if (counter <= num) {
        return { value: counter++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
} 

const counter = iteratorObject(10); 

console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 


/**  
* ? In-built Iterable 
* 
*  * We have in-built iterators also to iterate iterable object. 
*  
*  * Syntax of iterable
*    <iterable-data-structure>[Symbol.iterator]()
*/   

const fruitsArr = ["Mangos", "Banana", "Pineapple", "Pomegranate"]; 

const fruitIterator = fruitsArr[Symbol.iterator](); 
console.log(fruitIterator.next()); // { value: 'Mangos', done: false } 
console.log(fruitIterator.next()); // { value: 'Banana', done: false }
console.log(fruitIterator.next()); // { value: 'Pineapple', done: false }
console.log(fruitIterator.next()); // { value: 'Pomegranate', done: false }
console.log(fruitIterator.next()); // { value: undefined, done: true } 



