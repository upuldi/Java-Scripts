console.log('Boolean(\'true\') : ' + Boolean('true'));
console.log('Boolean(\'false\') : ' + Boolean('false'));
console.log('Boolean(undefined) : ' + Boolean(undefined));
console.log('Boolean(null) : ' + Boolean(null));
console.log('Boolean(0) : ' + Boolean(0));
console.log('Boolean(1) : ' + Boolean(1));
console.log('Boolean(\'\') : ' + Boolean(''));
console.log('Boolean(\'some sting\') : ' + Boolean('some string'));


console.log('Checking whether some value is there in a vairable after some process');

var someVariable;

//A process, eg AJAX call etc....
someVariable = 'value got from the server';

if (someVariable) {
    console.log('Some value is there.....');
} else {
    console.log('Nothing is there......');
}

console.log(' OR || operator coercion');
console.log(' true || false : ' + true || false );
console.log(' \'true\' || \'false\' : ' + 'true' || 'false' );
console.log('0 || 1  : ' + 0 || 1); 
console.log('hi || true  : ' + 'hi' || true); 
console.log('hi || false  : ' + 'hi' || false); 
console.log('null || hello  : ' + 'hello' || null); 
console.log('undefined || hello  : ' + 'hello' || undefined); 
console.log('\'\' || hello : ' + 'hello' || '');
