/**
 * Prototype
 *      each object can have a prototype, it is q special reference
 * 
 * Prototype Chain
 *      a prototype can have another prototypes, this is called prototype chain
 *      JS engines stats in the top of the chain and work down, once it find the property it stops and does not further looks up 
 *      when a proterty is requested on an object, first it looks for properties within the object then look for properties of the prototype
 *      Two objects can refer to the same prototype
 */

var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var upul = {
    firstName: "Upul",
    lastName: "Doluweera"
}

// Never do this in the real life, demo purpose only
// Setting the prototype object 

upul.__proto__ = person;
console.log(upul.getFullName());

paul = {
    firstName: "Paul"
}

paul.__proto__ = person;
console.log(paul.getFullName());