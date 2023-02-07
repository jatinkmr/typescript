// example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
greet('GC', 'hello');
greet('JKj', 'hi');
// example 2
var cal;
cal = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else if (action === 'sub') {
        return numOne - numTwo;
    }
    else if (action === 'mul') {
        return numOne * numTwo;
    }
    return 0;
};
console.log(cal(5, 3, 'add'));
console.log(cal(39, 21, 'sub'));
console.log(cal(42, 23, 'mul'));
console.log(cal(23, 23, 'div'));
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old!"));
};
logDetails({ name: 'Jatin', age: 26 });
logDetails({ name: 'GC', age: 25 });
