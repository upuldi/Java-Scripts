console.log("My first object in JS");

//This is how you define an object in JS
var person = new Object();
//Now you are adding properties and setting values to them.
person["firstName"] = 'Upul Person';
person["lastName"] = 'Doluweera';

console.log(person);
console.log(person["firstName"]);
console.log(person["lastName"]);

//Now we use dot operator to create members in memory.

person.address = new Object();
person.address.city = 'Sydney';
person.address.state = 'NSW';
person.address.country = 'Australia';
person.address.street = 'Pennant Hills';

console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.country);
console.log(person.address.street);

//Object literal

console.log('Object literal {} ');

var employee = {};
employee.firstName = 'test name';
employee.age = 24;
console.log(employee);

var Student = { 

    firstName : 'Upul Student',
    lastName : 'Doluweera',
    age : 31,
    address : {
        city : 'Sydney',
        street : 'Weemala Street',
        state : 'NSW'
    }
}

console.log(Student);

//you can pass an object to a function.

function myFunction(someObject) {
    console.log('Well first name is : ' + someObject.firstName);
}

myFunction(Student);
myFunction(person);
myFunction(employee);