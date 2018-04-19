
/**
* before the JS engine execute the js code it allowcate memory space for all the functions and variables defined in the code, this is
* called hosting..
*
* Once the hosting is completed (once the all the variables and functions are created inside the memory) JS engine interprit the code line by line
* and it is the reason for the variable to have undefined value, as the value association is below the code.
*/

'use strict';

/**
 * This function will get executed.
 */
simpleFunction();

// The value for this variable would be undefined..
console.log("someVariable :" + someVariable);

/**
 * When a variable is not defined, JS engine throws an error saying it is not defined
 * Undefined is NOT variable is not defined, It is a value has never been assigned to a variable.
 * 
 */
// console.log(variableWhichIsNotDefined);

var someVariable = "test";

function simpleFunction() {
  console.log("Inside  simpleFunction...");
}


// Hoisting can be happen inside functions as well

function someFunction() {

  anotherFunction();
  var someVariable = "SomeValue";

  function anotherFunction() {
    console.log(someVariable);
  }
}
