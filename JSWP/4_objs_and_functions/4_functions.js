'use strict';

/**
 * in JS functions are objects,
 * So you can do whatever you do to a object to a function
 * Also you can assign a function at the place where an object is expected..
 */


function someFunction() {
  console.log("Some function ");
}
someFunction.someProperty = "Some Value"

someFunction();

console.log(someFunction);
console.log(someFunction.someProperty);

/**
 * Since a function is an object, it has properties
 */

console.log(someFunction.name);
console.log("Type of function : " + typeof someFunction);
console.log("Functions are objects .. : " + (someFunction instanceof Object));