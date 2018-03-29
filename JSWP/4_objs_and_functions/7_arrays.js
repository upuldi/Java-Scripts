var array = new Array();
var arr2 = [];

// arrays can have different types in its elements
// so we can put functions
var array3 = [
  "String",
  1,
  {
    firstName: "Upul",
    lastName: "Doluweera"
  },
  function(c) {
    var x  = "Hello ";
    console.log(x + c);
  }
]
console.log(array3[2].lastName);
array3[3](array3[0]);
