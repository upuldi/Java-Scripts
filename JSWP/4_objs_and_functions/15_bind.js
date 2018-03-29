/**
 * all functions get call() apply() and bind() methods
 */

/**
 * bind is used to bind a function with a object,
 * So the function would be like a part of the object.
 */

var person = {
  firstName: "Upul",
  lastName: "Doluweera",
  printName: function() {
    return this.firstName + " " + this.lastName;
  }
}

var greetName = function(x) {
  console.log(x);
  console.log("Hello " + this.printName());
}

/**
 * The above function will fail, as the "this"
 * does not has a proper execution context.
 *
 * We can bind the person object with the function using bind() method
 * bind will return a new function instance.
 *
 * BIND DOES NOT EXECUTE THE FUNCTION UNLIKE CALL
 */

var boundedFunction = greetName.bind(person,"someValue");
boundedFunction();

/**
 * The same can be defined in many ways
 */

var anotherFunctionBoundedOntheFly = function(x) {
  console.log( x + " " + this.printName());
}.bind(person);

anotherFunctionBoundedOntheFly("Holla");
