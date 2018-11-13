// arguments is a keyword in js
// it will provides all the arguments passes to a function

'use strict';

function someFunction(x,y,z) {
  console.log(x);
  console.log(y);
  console.log(z);

  // arguments keyword
  console.log(arguments);
  console.log(" Arg Length : " + arguments.length);
}

/**
 * In Js it is not a must to pass arguments to a function
 * arguments will be set left to right
 *
 */
someFunction();
someFunction(5);
someFunction(5,10);
someFunction(5,10,15);

// You can pass more parameters than the function expects
someFunction(5,10,15,20,25,30,35);

/**
 * In modern JS spread is used to pass more than 1 parameter
 * to the function
 */
function withSpread(x,y, ...z) {
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(" Z length " +  z.length);
}

withSpread(5);
withSpread(5,10);
withSpread(5,10,15,20,25,30);


function anotherExampleWithSpred(...k) {
  console.log(" K Length is : " + k.length)
  console.log(" K first index is : " +  k[0])
}

anotherExampleWithSpred(10,20,30,40,50);