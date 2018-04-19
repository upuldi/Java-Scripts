/**
 * Closure has access to the outside variables.
 * 
 */

function greet(name) {
  return function(greeting) {
    console.log( greeting + " " + name + " ...." );
  }
}

greet("upul")("hello")
