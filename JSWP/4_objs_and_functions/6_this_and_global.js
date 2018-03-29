'use strict';

function someFunction() {
  console.log(this);
  this.someVariable = "SomeValue"
}

function anotherFunction() {
  console.log(this);
  console.log(this.someVariable);
}


console.log(this);
someFunction();
console.log(this.someVariable);
anotherFunction();
