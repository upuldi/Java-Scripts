var someObject = {
    property: "Value",
    anotherProperty: "AnotherValue",
    someFunction: function() {
        console.log("Some function");
    }
}

var originalFunction = function(input) {
    console.log(input);
    console.log(this.property);
    console.log(this.anotherProperty);

    this.someFunction();
}

var bindedFunction = originalFunction.bind(someObject);
bindedFunction("Bind demo...");


originalFunction.call(someObject,"called function demo.....");
originalFunction.apply(someObject, ["Applied function demo...."])