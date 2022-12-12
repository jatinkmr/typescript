// 1) Array
console.log('Array');
var numList = [1, 2, 3, 4, 5];
var strList = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO'];
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
console.log(isItSummer(Month.Jun));
console.log(isItSummer(0));
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
