'use strict';

/**
 * When the code is execued within the function a execution context is created for that execution
 * 
 */

function a() {
  var someVariable = "AA value"
  console.log("function a..." + someVariable);
  b();
}

function b() {
  var someVariable;
  console.log("function b..." + someVariable);
}


var someVariable = "global value"
console.log( "Global.." + someVariable);
a();
