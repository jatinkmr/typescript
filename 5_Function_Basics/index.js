// let greet = () => {
//     console.log('Hello World!!');
// };
var greet;
// greet = 'hello'; // we can't do that thing as it's a function not a variable
greet = function () {
    console.log('Hello World!!');
};
// in the below given function both parameters of a function is mandatory
var add = function (a, b) {
    console.log('Result => ', a + b);
};
add(5, 10);
// to make any argument optional, we use "?" which makes an arg optional
var optionalAdd = function (a, b, c) {
    console.log('a => ', a, ' b => ', b, ' c => ', c);
    console.log('a+b', a + b);
};
optionalAdd(4, 6);
optionalAdd(3, 6, 'hello');
// to make any argument optional, and assigning any default value
var optionalDefaultAdd = function (a, b, c) {
    console.log('a => ', a, ' b => ', b, ' c => ', c);
    console.log('a+b', a + b);
};
optionalDefaultAdd(4, 16);
optionalDefaultAdd(13, 6, 'hello');
optionalDefaultAdd(13, 6, 37);
// optionalDefaultAdd(13, 6, true); // It'll going to throw an error as the 3rd arg is number or string but we've pass the boolean value
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
console.log('result -> ', result);
