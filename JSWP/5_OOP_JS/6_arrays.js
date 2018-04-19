/**
 * Arrays are objects in JS.
 * 
 * 
 */

 var somearray = [1,2,3,4,5,6]

/**
 * Since arrays are also objects in JS
 */

Array.prototype.someValue = function() {
     return 10000;
 }

 /**
  * Since arrays are objects and the prototype can be used on object to extend the functionality
  * we can add functions and values to arrays, however those will be visible when we traverse an array like follodwing
  * So this type of arrays traversing is not encouraged.
  */
 for(var x in somearray) {
     console.log(x);
 }

 //instead use following 
 for (var i = 0; i < somearray.length; i++) {
     console.log(somearray[i]);
 }