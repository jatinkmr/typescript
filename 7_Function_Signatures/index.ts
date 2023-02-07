// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string): void => {
    console.log(`${name} says ${greeting}`);
};

greet('GC', 'hello');
greet('JKj', 'hi');


// example 2
let cal: (a: number, b: number, c: string) => number;

cal = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else if (action === 'sub') {
        return numOne - numTwo;
    } else if (action === 'mul') {
        return numOne * numTwo;
    }
    return 0;
}

console.log(cal(5, 3, 'add'));
console.log(cal(39, 21, 'sub'));
console.log(cal(42, 23, 'mul'));
console.log(cal(23, 23, 'div'));

// example 3
type objWithPropsType = { name: string, age: number };
let logDetails: (obj: objWithPropsType) => void;

logDetails = (ninja: objWithPropsType) => {
    console.log(`${ninja.name} is ${ninja.age} years old!`);
};

logDetails({ name: 'Jatin', age: 26 });
logDetails({ name: 'GC', age: 25 });

