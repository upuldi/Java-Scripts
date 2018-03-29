/**
 * JSON.stringify() and
 * JSON.parse() are builtin functions
 *
 */

'use strict';

var object = {
  firstName: "Upul",
  lastName: "Doluweera",
  address: "Australia"
}

console.log(JSON.stringify(object));
console.log(JSON.parse('{ "firstName" : "UPUL", "lastName " : "DOLUWEERA" }'));
