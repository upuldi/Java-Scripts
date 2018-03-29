'use strict';

var someFun = function(x) {
  console.log("someFunction " + x );
}("xXXX");


/**
 * We cant immidiately invoked function statemets
 * as once the function is defined as a statement it expects a name
 * in order to trick the JS engine, we have to put the function expression
 * inside a () to immidiately execute it.
 */

//
// The following will fail as it is  a function statement
// rather a function exression.
// function(){
//   console.log("another function execution......");
// }();

// in order to make it a function expression we have to put it
// inside a pranthisis ()

(function(ss) {
  console.log("IMMIDIATLY INVOKED FUNCTION " + ss);
})("parameter....");

//The place where you put the paranthis is not important

(function(x) {
  console.log("IIFE ........ " + x);
}) /* outside the paranthis*/ ("outside...");

(function(x) {
  console.log("IIFE ........ " + x);
} /* inside the paranthis*/ ("inside...") );

/**
 * This is a very important ascpect of JS
 * where you can use this to keep the code get executed
 * execute within a environment without any side effects.
 */

/*
This is a JS pattern to safe execute JS code..
 */
