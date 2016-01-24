console.log('Second Example');

function first() {

    function second() {
        console.log('Value is : ' + myVar);
        /** First second will look for myVar in its outer lexical environment which is inside first.
         Once it failled to find the value inside its immediate outer lexical environment which is first 
         it will look for the outer environment's outer lexical environment. like wise it will continue till it reach the global execution          context. **/
    }
    
    second();
}

var myVar = 'A global Value';

first();