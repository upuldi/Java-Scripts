var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var Upul = {
    firstName: "Upul",
    lastName: "Doluweera"
}

Upul.__proto__ = person;

/** To reflect the properties in the object */
for (var prop in Upul) {
    console.log(Upul[prop]);
}

/** To check whether the properties are actually defined in the object or 
 * getting inhirited via the prototype object
 */
for (var prop in Upul) {

    if (Upul.hasOwnProperty(prop)) {
        console.log( "Prop : " + Upul[prop]);
    } else {
        console.log("Object is not ownning the property " + Upul[prop] );
    }
}

/**
 * Sometimes you can keep on adding properties to your object in interest without making prototype chains.
 * For ex if you want to add properties of many objects into a single object you can use underscore library
 * 
 * _.extend(destinationObject, sourceObject1,sourceObj2,sourceObj3......)
 */


var soruceObject = {
    someValue: "Some Value",
    anotherValue: "Another Value",
}

var somefunction = function() {
    return "some function..."
}

var obj1 = {
    obj1Val: "obj1",
    method1: function(){
        console.log("this is method 1...");
    }
}

var obj2 = {
    obj2Val: "obj2",
    method2: function(){
        console.log("this is method 2...");
    }
}


var _ = require("underscore");
//To extends sourceObject with the other objects without adding them to the prototype chain
_.extend(soruceObject,somefunction,obj1,obj2);

console.log("With Extends .. " + Object.keys(soruceObject));

