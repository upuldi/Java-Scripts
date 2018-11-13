function operateOnArray(arr,fun) {
    for (var x = 0; x < arr.length; x++ ) {
        var y =fun(arr[x]);
        console.log(y);
    }
}


var array = [1,2,3,4,5];
operateOnArray(array,function(x){
    return x*x;
});

console.log("New Demo.....");

function powerCalculator(times,value) {
    
    var finalValue = 1;
    for (var i = 0; i < times;i++) {
        finalValue = finalValue * value; 
    }
    return finalValue;
}

operateOnArray(array, powerCalculator.bind(this,3));

console.log("New Demo.....");
operateOnArray(array, powerCalculator.bind(this,10));