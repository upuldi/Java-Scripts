'use strict';
/**
 * Objects are memory locations
 * Properties can be added or accessed usiing [] or . operators
 */
var obj = new Object();

// Since objects are nothing but key value collections
// properties can be added like this

obj["firstName"] = "Upul";
obj["lastName"] = "Doluweera";

console.log(obj);

// Properties can be accessed via the property name
var lastNameProperty = "lastName"
console.log(obj[lastNameProperty]);

// Also dot can be used to access Properties
console.log(obj.firstName);
obj.address = "Australia";
console.log(obj.address);

var anotherObj = {};
anotherObj.firstName = "Paul"
anotherObj["lastName"] = "Doluweera"
console.log(anotherObj);
