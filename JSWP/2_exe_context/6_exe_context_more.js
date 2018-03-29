'use strict';

function a() {

  var someVariable = "Insided A";
  b();

  function b() {
    console.log(someVariable);
  }

}

var someVariable = "Global..";
console.log(someVariable);
a();
