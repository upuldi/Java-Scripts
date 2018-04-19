function Person() {
    this.firstName = "Upul",
    this.lastName = "Doluweera"
}


var person = new Person();
console.log(person);


/**
 * New keyword is an operator in Java Script.
 * 
 * new always creates an empty object immidiately, when the function is called
 * it execution context is pointed to the empty object and returned if anything else is not 
 * explicitly returned.
 * 
 * So here its nothing but a function call with the new operator, once the call happens
 * the function this, get an execution context. This is called function constructors.
 * 
 * Function Constrctors
 *      Nothingbut a function which is used to create objects using new operators.
 * 
 */

function NothingButAFunction() {
    this.someKey = "SomeValue"
    return { Cat: "Tomcat", type: "Tiger"}
}

console.log(new NothingButAFunction());

// Parameterising it
function Person(firstName,lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}


var upuldi = new Person("Upul", "Doluweera");
console.log(upuldi);

/**
 * Functions are objects, a function has many properties like code,name,prototype
 * prototype property of a function IS NOT the prototype of the funciton
 * prototype property of the function is available ONLY when the function is invoked with new operator
 */

 Person.prototype.getFullName = function() {
     return this.firstName  + this.lastName;
 }

 /**
  * So This can be used to add functionality to a object later and most importantly JS functions are objects
  * so if you create a function constructor and add functions into it (instead of adding them to prototype) it will
  * consumes a lot of memory and that is the reason why most of the time functions are added to the prototype property of an object 
  * rather within the function constructor.
  */

  //Extending Functionality of Objects using prototype
String.prototype.myCustomMethod = function(s) {
    console.log("execurting the custom method with : " + s);
    console.log("Original String is : " + this.toString());
}
/**
 * Here String function has a prototype not the literal value.
 * Once you add the extended functionality to the String class the literal can use that
 */
"UpulDoluweera".myCustomMethod("Paul");