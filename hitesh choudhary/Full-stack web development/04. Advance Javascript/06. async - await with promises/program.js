//* async - await with promise all

/**
 * * We understand that we can imitate the asynchronous operation with the help of Promises
 * * In javascript promises are the special type of objects which represent the eventual result of a asynchronous operation.
 * * Promises have three states - Pending, Fulfilled and Rejected
 */

// async function fetchDataUrl(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof url === "string") {
//         resolve({
//           success: true,
//           message: "Successfully fetch the data",
//           users: [
//             { _id: 0, firstname: "Aayush", lastname: "Vyas", age: 27 },
//             { _id: 1, firstname: "Saijal", lastname: "Vyas", age: 24 },
//             { _id: 2, firstname: "John", lastname: "Doe", age: 40 },
//           ],
//         });
//       } else {
//         reject({
//           success: false,
//           message: "Error, while fetching data",
//           users: null,
//         });
//       }
//     }, 3000);
//   });
// }

/**
 * * We know that to consume the promise we need to use .then() and .catch() method
 */

// fetchDataUrl("https:www.download.com")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//* We have more better way to handle asynchronous task which is async-await function

/**
 * ? async - await function
 *  - async - await function is the function which helps to perform the asynchronous task.
 *  - to create any function `async - await` we have to use async keyword for it.
 *  - the functionality this `async keyword` provide is we can use await keyword which stops the execution of our data upto Promise state is fulfilled or rejected upto.
 *  - await keyword just stop the execution upto the promise state is not resolve or rejected.
 *  - async - await function always returns promise.
 *
 * ? Syntax of async - await function
 *  async function <function-identifier>()  {
 *        await <async-function>()
 *   }
 */

/**
 * * Example of async await function
 */

async function fetchUrl(url) {
  //* For better error handling we have to use try-catch block
  /**
   *  - This try-catch block is used for error handling.
   *  -  try block handles the success part of the async task.
   *  - catch block handles the error part of the async task.
   */
  try {
    const response = await fetchDataUrl(url);
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}

// calling the fetchUrl function
// fetchUrl(); // promise rejected

// fetchUrl("https:www.local-upload.com"); // promise fulfilled

function uploadPostData(title, type, data = "") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        typeof title === "string" ||
        typeof type === "string" ||
        typeof data === "string"
      ) {
        resolve({
          success: true,
          message: "Successfully post uploaded",
          post: { title, type, data },
        });
      } else {
        reject({ success: false, message: "Error, while uploading post" });
      }
    }, 6000);
  });
}

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({
          success: true,
          message: "Data fetched successfully",
          _id: 147896,
          username: "Aayush Vyas",
          userEmail: "aayush@vyas.com",
        });
      } else {
        reject({ success: false, message: "Error, while fetching data" });
      }
    }, 3000);
  });
}

async function fetchPostData(title, type, data) {
  const response = await uploadPostData(title, type, data);

  if (response.post.title === title) {
    return response;
  }

  throw new Error("Post not found");
}

async function uploadAndFetchData(title, type, post) {
    console.log("Upload Post....")
  try {
    await uploadPostData(title,type, post ); 
    console.log("Post Upload successfully");
    console.log("Fetching user and post data")
    const [userData, postData] = await Promise.all([fetchUserData(), fetchPostData(title, type, post)]); 
    console.log("Successfully fetch user and post data"); 
    console.log("userData",userData); 
    console.log("postData", postData); 
  } catch (error) {
    console.error(`Error, while uploading and fetching post: ${error.message}`);
  }
}  

uploadAndFetchData("Javascript", "technical", "Learning javascript for modern web development"); 
