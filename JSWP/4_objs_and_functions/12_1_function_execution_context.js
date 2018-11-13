/**
 * Think about the output of following function
 */

function someFunction() {

  var functionArray = [];
  for (var i = 0; i < 3; i++) {
    functionArray.push(
      function() {
        console.log(i);
      }
    );
  }
  return functionArray;
}


var result = someFunction();
result[0]();
result[1]();
result[2]();

/**
 * Here always the result would be 3 as whenever a function
 * get executed it will points to the latest value of i
 */
