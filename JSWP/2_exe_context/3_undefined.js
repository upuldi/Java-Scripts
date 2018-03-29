'use strict';
// undefined the value has never been set to a variable..
// this is the value a variable will receive at the creation phase of the exection context..
// undefined is a value in JS,it is not wrap inside quates like a string

var a; //get undefined
if (a === undefined) {
  console.log("a is undefined...");
} else {
  console.log("defined...");
}

// Undefined means a value has never been set to a variable..
var b;
b = "test";
b=""
console.log(b === undefined ? "b is undefined" : " b is defined");
