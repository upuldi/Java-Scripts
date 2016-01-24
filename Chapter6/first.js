function first() {
    var myVar = 'First';
    second();
}

function second() {
    console.log('Inside second function : ' + myVar);
}

var myVar = 'global'
console.log('Global level : ' + myVar);
first();