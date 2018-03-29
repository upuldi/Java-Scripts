'use strict';

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
