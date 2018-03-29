function greet(name) {
  return function(greeting) {
    console.log( greeting + " " + name + " ...." );
  }
}

greet("upul")("hello")
