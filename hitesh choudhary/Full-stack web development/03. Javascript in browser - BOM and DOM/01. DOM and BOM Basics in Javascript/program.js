//* Javascript in Browser - BOM and DOM 
/** 
 * As we know that Javascript, is mainly created for create dynamic and interactive web-pages and we can manipulate with the help of Document Object Model and Browser Object Model.  
 * 
 */ 

/** 
 *? Every browser window or browser tab is internally is window object which is the part of Browser API, which we can access through the Javascript. 
 */

console.log(window);  // Output: Window object 

/** 
 * * Browser Runtime Environment of Javascript provides some external features   
 * DOM - `Document Object Model` this document object model is used to access the DOM elements and  which is html elements only after parsing the HTML documents and methods to manipulate our DOM elements. 
 * BOM - `Browser Object Model` which is Browser Object Model is used to access the methods and properties related to Browser based. 
 * Javascript - Javascript language core fundamentals like objects, arrays and function etc.  
 * 
 * ?   Browser Javascript Runtime Environment 
 * 
 * *                 Window Object ------------------------------> Browser Window  
 *                        |
 *       _________________|___________________________________________________________________
 *      |                                                 |                                  |
 *      |                                                 |                                  |
 * *   DOM                                              BOM                            Javascript      
 * *   `Document Object                            `Browser Object                     fundamentals
 * *    Model`                                       Model` 
 *       |                                             |                                  |
 *      DOM                                            |                                  |  
 *      elements                                    screen                              arrays 
 *       |                                            |                                   |
 *     events methods                              navigator                            objects 
 *                                                    |                                   |  
 *                                                 location                             functions 
 *                                                                                         | 
 *                                                                                      class 
 *     
 */

//* Let understand how we can access the Window Object methods 

//* Document Object 
// To access the DOM we have to target document object which is accessible by Javascript.  
console.log(document); // Output: Whole our HTML Page of `index.html`

//? We have some methods to access the HTML elements or DOM Element 
console.log(document.firstChild); //* Output: <!DOCTYPE html>  
// firstChild property It provide first element of document  

//? We have specific methods to access the HTML Elements  
// If we want to access the individual elements than we have to access 
console.log(document.getElementsByTagName('h1'));  
// Here we can access the .getElementsByTagName() is helpful to target html elements or DOM element with tag name

//* Window Object 
// To access the BOM we have to target window object 
console.log(window); // Output: Browser Window object 
//? navigator object 
console.log(window.navigator);   // This is navigator object which have access of navigation 
console.log(window.navigator.userAgent); 
//? location object 
console.log(window.location); // Output: location object 

