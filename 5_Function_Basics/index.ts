// let greet = () => {
//     console.log('Hello World!!');
// };

let greet: Function;

// greet = 'hello'; // we can't do that thing as it's a function not a variable

greet = () => {
    console.log('Hello World!!');
};

// in the below given function both parameters of a function is mandatory
const add = (a: number, b: number) => {
    console.log('Result => ', a+b);
};

add(5, 10);

// to make any argument optional, we use "?" which makes an arg optional
const optionalAdd = (a: number, b: number, c?:number|string) => {
    console.log('a => ', a, ' b => ', b, ' c => ', c);
    console.log('a+b', a+b);
};

optionalAdd(4, 6);
optionalAdd(3, 6, 'hello');

// to make any argument optional, and assigning any default value
const optionalDefaultAdd = (a: number, b: number, c?:number|string) => {
    console.log('a => ', a, ' b => ', b, ' c => ', c);
    console.log('a+b', a+b);
};

optionalDefaultAdd(4, 16);
optionalDefaultAdd(13, 6, 'hello');
optionalDefaultAdd(13, 6, 37);

// optionalDefaultAdd(13, 6, true); // It'll going to throw an error as the 3rd arg is number or string but we've pass the boolean value


// we can also define the return value by following ways after (): <return-data-type>
const minus = (a: number, b: number): number => {
    return a-b;
};

let result = minus(10, 7);
// result = 'something'; // if we want to change their data-type it'll throws an error as it knows that the return value is number.
console.log('result -> ', result);

