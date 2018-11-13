var objectLiteral = {
    firstName: "default",
    lastName: "default",
    greet: function() {
        return "Hi " + this.firstName + " " + this.lastName;
    }
}

/**
 * The new Object.create can be used to create a new objects which its prototype is pointed to the given object
 * newObjWithThePrototypePointedToGivenObject = Object.create(givenObject); 
 *      
 */

 var newObject = Object.create(objectLiteral);
newObject.newFiled = " new object filed...."

 //See the resulting object is empty but its prototype has been pointed to the given object..
 console.log(Object.keys(newObject));
 console.log(newObject.greet());
 console.log(newObject);

 console.log(" newobject __proto__ : " +  newObject.__proto__);
 console.log(" newobject __proto__ : " +  Object.keys(newObject.__proto__));

//  The benefit here is we can redefined the protperties in this new returned object to override the default values
// because JS engine stop looking for properties once they found them
newObject.firstName = "Upul"
newObject.lastName="Doluweera"
console.log(newObject.greet());
