'use strict';

function someFunction() {
  console.log(this);
  // this.someVariable = "SomeValue"
}

function anotherFunction() {
  console.log(this);
  // console.log(this.someVariable);
}

var someVariable="glob"
console.log("some variable : " + someVariable);
console.log(" Global this : " + this);
console.log(" Global this.someVariable : " +  this.someVariable);

someFunction();
anotherFunction();
