var a = 10,b='2';
console.log(a+b);

console.log('Second Example');

var a = 20; b = '30' , c = 3;
console.log(a*c*b); // Here b is auto converted into a number by the JS engine.

console.log('Operator example');
var value = 1<2<3;
console.log('1<2<3 result is : ' + value);
value = 3<2<1;
console.log('3<2<1 result is : ' + value);
console.log('True number value : ' + Number(true));
console.log('False number value : ' + Number(false));

console.log('Number Coercion');
console.log('Number(undefined) : ' + Number(undefined));
console.log('Number(null) : ' + Number(null));
console.log('Number(string) : ' + Number('String'));

console.log('Issues with equal == operator strage beaviour due to coercion ');
value = '1' == 0;
console.log('1 == \'0\' : ' + value);
value = '1' == 1;
console.log('1 == \'1\' : ' + value);
value = '1' == true;
console.log('1 == true : ' + value);
value = '1' == false;
console.log('1 == false : ' + value);
value = '0' == null;
console.log('1 == null : ' + value);
value = '0' == '';
console.log(' \'0\' == \'\'  : ' + value);
value = 0 == '';
console.log('0 == \'\'  : ' + value);

console.log('Strick equality === operator');
value = 3 === 3;
console.log(' 3 === 3 : '  + value );
value = 3 === '3';
console.log(' 3 === \'3\' : '  + value );

console.log('Strick unequality !== will behave same and will take the type of the values into action when checking the eqality');