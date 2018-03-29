/**
 * operators are functions
 * when you use || operator values are being converted to boolean
 * so it can be used to set default values in old JS
 */

function someFunction(name) {
  // here if the name is undefined , undefined || "default name", so the
  // sinice the operator is XOR the string value will be retured.
  //
  name = name || "default name";
  console.log(name);
}

someFunction();
console.log("AA" || "BB");
console.log(undefined || "something");
console.log(0 || "something");
console.log(0 || 1);
