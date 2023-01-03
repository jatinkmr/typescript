// 1) Array
console.log('Array');
var numList = [1, 2, 3, 4, 5];
var strList = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO'];
// numList.push('hello'); // will going to through an error as the array is number and we try to push string instead of number
// strList.push(37); // will going to through an error as the array is string and we try to push number instead of string
console.log(numList);
console.log(strList);
// 2) Touple
console.log('Touple');
var anyList = [1, 2, 'ABC', 'DEF'];
console.log(anyList);
// 3) Class
// see TypeScriptClass.ts
// 4) Enum
// Enums define a set of named constant. TypeScript provides both string-based and numeric-based enums. By default, enums begin numbering their elements starting from 0, but we can also change this by manually setting the value to one of its elements. TypeScript gets support for enums from ES6.
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
console.log('Month => ', Month);
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Apr:
        case Month.May:
        case Month.Jun:
        case Month.Jul:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log('Month.Jun', isItSummer(Month.Jun));
console.log('0', isItSummer(0));
// 5) Interface
// 6) Functions
console.log('Functions');
// named function with number as parameters type and return type
function addition(a, b) {
    return a + b;
}
console.log(addition(4, 5));
// anonymouse function with number as parameters type and return type
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
// Object
var ninjaObj = {
    name: 'Ninja',
    belt: 'Black',
    age: 43
};
console.log('before altering');
console.log('ninjaObj -> ', ninjaObj);
ninjaObj.name = 'New Ninja';
ninjaObj.belt = 'White';
// ninjaObj.age = '43'; // Will going to throw an error as we're changing the type from number to string
// ninjaObj.skills = ['fighting', 'sneeking', 'taikondo']; // we can't add aditional property to existing object
// if in case we're going to change the structure it'll throws an error. We can only change the value but not the properties because that doesn't match the created structure
// ninjaObj = {
//     name: 'Yoshi',
//     belt: 'White',
//     age: 35,
//     skills: ['fighting', 'sneek-peek']
// };
// the above object is going to throw an error as we're trying to add new property name skills which doesn't exist into the original object due to which it's going to throw an error
ninjaObj = {
    name: 'Yoshi',
    belt: 'White',
    age: 35
};
console.log('after altering');
console.log('ninjaObj -> ', ninjaObj);
