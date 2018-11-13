'use strict';

/**
 * Functions are objects, they have name property.
 *    Functions will pass func instanceof object --> true
 *    and will return typeof func --> function
 * 
 * You can add additional properties to functions as objects
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


/**
 * In order to return a value from a function you have to use the return keyword
 */
function sum(a,b) {
  return a+b
}
var resutl = sum(10,20);
console.log(resutl);

/**
 * When you follow the lambda style you dont have to have the return statements
 */
var lambdaStyleFunctionDeclaration = (a,b) => a + b;
console.log(lambdaStyleFunctionDeclaration(10, 20));
