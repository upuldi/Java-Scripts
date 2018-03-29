function first() {
    var myVar = 'First';
    console.log(myVar);
    second();
}

function second() {
    var myVar = 'Second';
    console.log(myVar);
}

var myVar = 'global'
console.log(myVar);
first();