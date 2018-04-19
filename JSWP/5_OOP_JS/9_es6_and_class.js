/**
 * 
 * For object creation in JS different syntatic sugar have been introduced later for ex class and extends keywords 
 * However those are same as the traditional functional constructors and those are objects.
 * 
 * This is an object. This is not a class as in other programming languages 
 * In other programming languages class is a template for objects, but in JS class is a object.
 * This is similar to useing function constrctors
 * 
 */
class SomeClass {

    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

function SomeFunctionConstructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.thisIsNotTheWayAMethodShouldDefined = function() {
        console.log("This is not the way a method should be defined......");
    }
}
SomeFunctionConstructor.prototype.thisIsTheWayAMethodShouldDefined = function() {
    console.log("This is the way method should be defined.....")
}

var someObject = new SomeClass(5,10,15);
console.log(someObject);

var someFunctionObj = new SomeFunctionConstructor(10,20,30);
console.log(someFunctionObj);
someFunctionObj.thisIsNotTheWayAMethodShouldDefined();
someFunctionObj.thisIsTheWayAMethodShouldDefined();

/**
 * For setting the prototype there is anonther keyword introduces - extends
 */

 class SomeSpecialClass extends SomeClass {
     
    constructor(x,) {
        super(x,100,200);
    }

    /**
     * see the diffrent syntactic sugar for function definitions..
     */
    someSpecificMethod() {
        console.log("Some Specific Method.....");
        
    }
 }

var specialCase = new SomeSpecialClass(60);
console.log(specialCase);
specialCase.someSpecificMethod();



