// {} is a shorthand operator to indicate a object

'use strict';

// {} object literal
var obj = {};
var sameobj = new Object();

/**
 * OBjects can be used as container for other variables
 * to define fake namespaces/packages
 */

var english = {}
var spanish = {}

english.greeting = "Hello"
spanish.greeting = "Hola"

console.log(english.greeting);
console.log(spanish.greeting);
