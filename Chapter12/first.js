function functionWithNoDefaultValue(name) {
    console.log('function says : ' + name);
}

console.log('Function with no default value');
functionWithNoDefaultValue();
functionWithNoDefaultValue('Some Value')

console.log('Function with default value');

function functionWithDefaultValue(someVar) {
    someVar = someVar || 'Detfault value is being used. Pls provide a value';
    console.log('Function says : ' + someVar);
}

functionWithDefaultValue('value call');
functionWithDefaultValue();