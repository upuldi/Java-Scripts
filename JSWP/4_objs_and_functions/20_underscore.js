var _ = require("underscore");

var array = _.map([1,2,3,4], (x) => {
    return x*x;
}); 
console.log(array);

// Filter demo
var result2 = _.filter([1,2,3,4,5,6,7],function(x){
    return x*x > 10;
});
console.log(result2);

// Tipical Map Filter
var simpleArray = [1,2,3,4,5,6,7,8,9,10];
var result3 = _.map(simpleArray,(x) => {
    return x*x;
}).filter((x) => {
    return x > 10;
} );
console.log(result3);
