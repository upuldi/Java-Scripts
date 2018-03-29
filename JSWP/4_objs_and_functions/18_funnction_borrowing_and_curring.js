/**
 * calll() apply() bind() can be used to borrow functionality and for curring,
 */

//Borrowing functionality

var context1 = {
  name: "Upul",
  age: 32
}

var context2 = {
  name: "Paul",
  age: 32
}

function commonFunction() {
  console.log(this.name);
}

commonFunction.apply(context1);
commonFunction.apply(context2);


//Curring
/**
 * Bind can be used to curring functions.
 * 
 * curring is a process of creating functions using
 * another function by setting values beforehand.
 *
 */

function multiply(a,b) {
  console.log(a*b);
}

/**
 * here this doing nothing, since we are passing 2 as the
 * first parameter always the return method would need only 1 parameter
 * to execute it and the 2 will be permenatly placed as the first param.
 */
var multiByTwo = multiply.bind(this,2);
multiByTwo(99);

//Curring
multiply.bind(this,5)(10);
