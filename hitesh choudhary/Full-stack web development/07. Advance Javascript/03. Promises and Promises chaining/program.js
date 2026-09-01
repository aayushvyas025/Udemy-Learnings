//* Promises and Promises chaining

/**
 *  - We understand that asynchronous task like network call,  are not achieve by the javascript internal feature it's achieve with the help of external methods which provided by javascript runtime environment.
 *
 * - We can imitate this functionality manually with the help of javascript utility Promises  which give functionality to perform asynchronous task.
 *
 * - Promises are the special type of Object which represent the eventual result of a asynchronous operation.
 *
 * - Promises have three states, Pending, Fulfilled  and Reject state.
 *
 * - After pending we have fulfilled and rejected.
 *
 * ? Syntax of Promises
 * *  new Promise((resolve, reject) => {
 * *        - Promises takes callback function which have two parameters resolve and reject object.
 * *     })
 *
 * * Always create promise with constructor
 *
 *
 */

//? Example of Promises
function fetchData(url) {
  /**
   * * Here we create the fetchData for the Promises
   *
   */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof url === "string") {
        resolve({
          success: true,
          message: "Data fetched successfully!",
          users: [
            { _id: 1456, firstname: "Aayush", lastname: "Vyas", age: 27 },
            { _id: 1457, firstname: "Saijal", lastname: "Vyas", age: 23 },
            { _id: 1458, firstname: "John", lastname: "Doe", age: 45 },
            { _id: 1459, firstname: "Peter", lastname: "Singh", age: 56 },
          ],
        });
      } else {
        reject({
          success: false,
          message: "Error, while fetching data",
          users: null,
        });
      }
    }, 3000);
  });
}

// let response = fetchData('https:www.users.com');

// console.log(response);
/**
 * * Output:
 *  Promise {<pending>} , here the promise result is pending state
 *
 * * This Promise have three states:
 *  - pending: initial state, neither fulfill nor rejected.
 *  - fulfilled: meaning that the operation was completed successfully.
 *  - rejected: meaning that the operation failed
 */

/**
 * ? To find the resolve and reject state we have to do chaining of promises
 */
/**
 * * We have some methods to find promises states.
 *
 */

fetchData("https:www.users.com")
  .then((data) => {
    console.log(data);
    return fetchData("https:www.fileupload.com");
    /**
     * Again, we call the fetchData to do chaining of then
     */
  })
  .then((data) => {
    console.log(data);
    return fetchData(123456);
    /**
     * Here, we call the fetchData with another type than it give me error so that's handling goes into catch method.
     */
  })
  .catch((error) => console.log(error));

/**
 * ? .then(call-back function) - this `then method` is for handling fulfilled state and it takes callback fun as argument.
 *
 * ? .catch(call-back function) - this `catch method` is for handling rejected state and it also take callback fun as arguments.
 */

/**
 * ? Output: Data
 * {
 *   success:true,
 *   message:'Data fetched successfully!',
 *   users:[
 *          {_id:1456, firstname:'Aayush', lastname:'Vyas', age:27},
 *          {_id:1457, firstname:"Saijal", lastname:"Vyas",age:23},
 *          {_id:1458, firstname:"John", lastname;"Vyas", age:45},
 *          {_id:1459, firstname:"Peter", lastname:"Singh", age:56}
 *       ]
 *  }
 *
 */
