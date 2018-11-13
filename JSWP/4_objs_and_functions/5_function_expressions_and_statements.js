/**
 * There are two types of functions in js
 * Function Statements
 *  normal funciton definitions, get hoiested
*  Function Expressions
*   returns a value, does not get hoiested
 */

// This is a function statement, Function statements are tipical function definitions
function someFunctionDefinition(){
  console.log("this is a function statement");
}

// this is a function expression
// since functions are objects in JS here what we are exactly
// doing is creating an object and assign it to the variable
var annonymousFunction = function() {
  console.log("this is a function expression");
}
