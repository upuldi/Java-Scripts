'use strict';
function someFunction() {
  var functionArray = [];

  for (var i = 0; i < 3; i++) {
    functionArray.push(

      /**
       * if we immideatly execute a function after its creation
       * a an execution context will be created for the function
       * and the variable will be assigned for ex
       */
      (function(x) {
        //Now x has the current value of i as the outer function got executed
        return function() {
          console.log(x);
        }
      }(i))
    );
  }
  return functionArray;
}


var result = someFunction();
result[0]();
result[1]();
result[2]();
