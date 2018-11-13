

//Curring demo....
function greetingFunction(greet,name) {
    console.log("** " + greet + " " + name + "**");
}


var englishGreet = greetingFunction.bind(this,"hello");
englishGreet("Upul");
englishGreet("Kush");

