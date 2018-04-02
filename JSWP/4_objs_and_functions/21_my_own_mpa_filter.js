function __map(collection,callback) {
    var returnArray = [];
    for(var i=0;i<collection.length;i++) {
        returnArray[i] = callback(collection[i]);
    }
    return returnArray;
}


var array = [1,2,3,4,5,6,7,8,9,10];
var newArr = __map(array,function(x) {
    return x*x;
});
console.log(newArr);

