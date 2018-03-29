/**
 * Unlike Bind Call,apply executes the function.
 */
 var person = {
   firstName: "Upul",
   lastName: "Doluweera",
   printName: function() {
     return this.firstName + " " + this.lastName;
   }
 }
 var greetName = function(x,y,z) {
   console.log(x);
   console.log(y);
   console.log(z);
   console.log("Hello " + this.printName());
 }

/**
 * call not only binds an object with the function
 * but also executes it at the same time.
 */
greetName.call(person,5,10,15);

/**
 * Apply does the exact same thing
 * but the argumes has to be passes as an array
 */
greetName.apply(person, [5,10,15]);

// these functions can be executed onthefly

(function(x,y,z) {
    console.log(x);
    console.log(y);
    console.log(z);
    console.log("Hello " + this.printName());
  }).apply(person,[3,6,9]);
