
var globalCounter = 1;

var someFunction = function() {

    var functionArray = [];
    var x = 0;
    while(x < 3) {
        functionArray.push(function(){
            console.log(globalCounter);
        });
        x += 1;
        globalCounter += 1;
    }
    return functionArray;
}

var result = someFunction();
console.log("GC after function call : " + globalCounter);

globalCounter += 1;
globalCounter += 1;
globalCounter += 1;
console.log("GC after external updates : " + globalCounter);


result[0]();
result[1]();
result[2]();