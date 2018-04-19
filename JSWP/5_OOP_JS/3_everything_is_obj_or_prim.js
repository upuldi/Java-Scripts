'use strict';

var obj = {};
var func = function() {};

/**
 * All the default methods avilable in JS objects are coming from the prototype object.
 */

// An Object prototype is a object
 console.log(obj.__proto__);
 
 // A Function prototype is a function
 console.log(func.__proto__);
 

console.log(Object.keys(obj.__proto__));
console.log(Object.keys(func));
