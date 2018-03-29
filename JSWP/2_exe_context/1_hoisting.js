
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
someFunction();

// The value for this variable would be undefined..
console.log(someVariable);

var someVariable = "test";

function someFunction() {
  console.log("Some function...");
}


// Hoisting can be happen inside functions as well

function someFunction() {

  anotherFunction();
  var someVariable = "SomeValue";

  function anotherFunction() {
    console.log(someVariable);
  }
}
