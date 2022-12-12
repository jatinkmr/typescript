// 1) Array
console.log('Array');
let numList:number[] = [1, 2, 3, 4, 5];
let strList:string[] = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO'];

console.log(numList);
console.log(strList);

// 2) Touple
console.log('Touple');
let anyList:any[] = [1, 2, 'ABC', 'DEF'];
console.log(anyList);

// 3) Class
// see TypeScriptClass.ts

// 4) Enum
// Enums define a set of named constant. TypeScript provides both string-based and numeric-based enums. By default, enums begin numbering their elements starting from 0, but we can also change this by manually setting the value to one of its elements. TypeScript gets support for enums from ES6.
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
function isItSummer(month: Month) {
    let isSummer: boolean;
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
function addition (a:number, b:number) {
    return a+b;
}
console.log(addition(4, 5));

// anonymouse function with number as parameters type and return type
let sum = function (a:number, b:number) {
    return a+b;
}
console.log(sum(1, 2));
