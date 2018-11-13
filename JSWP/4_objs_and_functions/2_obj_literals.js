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
english["code"] = "EN"

spanish.greeting = "Hola"
spanish["code"] = "SP"


console.log(english);
console.log(spanish);

