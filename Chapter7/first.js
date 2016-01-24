function first() {

    function second() {
        console.log('Inside second function : ' + myVar);
    }
    
    var myVar = 'First';
    second();
}



var myVar = 'global'
console.log('Global level : ' + myVar);
first();