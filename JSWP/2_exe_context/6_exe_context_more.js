'use strict';

function a() {

  var someVariable = "Insided A";
  var anotherVariable = "Insided A";
  b();

  function b() {
    anotherVariable = "Inside B"
    console.log(someVariable);
    console.log(anotherVariable);
  }

}

var someVariable = "Global Some..";
var anotherVariable = "Global Another..";
console.log(someVariable);
console.log(anotherVariable);
a();
