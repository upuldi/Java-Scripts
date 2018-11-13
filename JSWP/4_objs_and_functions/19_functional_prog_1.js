var powerOnList = (a) => { 
    for(var x=0;x<a.length;x++) {
        a[x] = a[x] * a[x];
        console.log(a[x]);
    }
} 

powerOnList([1,2,3,4,5]);

console.log("Operationn on list.......")

var operationOnList = (a,f) => {
    for(x=0;x<a.length;x++) {
        a[x] = f(a[x]);
        console.log(a[x]);
    }
}

operationOnList([1,2,3,4,5], function(x) {
    return x * 10;
} );

console.log("Operationn on list.......")
operationOnList([1,2,3,4,5], (x) => x*2);