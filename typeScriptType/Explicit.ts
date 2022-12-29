// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'hey'; // will going to throw an error
character = 'Mickey Mouse';
age = 30;
isLoggedIn = true;
console.log('character -> ', character, ' | age -> ', age, ' | isLoggedIn -> ', isLoggedIn);

// arrays
let ninjas: string[] = [];
ninjas.push('Donald Duck');

console.log('ninjas -> ', ninjas);

// union types - using dataTypes
let mixedArr: (string|number|boolean)[] = [];
mixedArr.push('Mickey Mouse');
mixedArr.push(20);
mixedArr.push(false);

console.log('mixedArr -> ', mixedArr);

// Defining the structure of an object
let mixedObj: {
    name: string,
    age: number
};

mixedObj = {
    name: 'Mario',
    age: 25,
    // skills: ['fighting', 'sneek-peek'] // will going to throw an error as the structure doesn't have skills property name
};

console.log('mixedObj -> ', mixedObj);

// Dynamic types - using any keyword
let dynamicAge: any = 25;
console.log('dynamicAge -> ', dynamicAge);
dynamicAge = true;
console.log('dynamicAge -> ', dynamicAge);
dynamicAge = 'hello';
console.log('dynamicAge -> ', dynamicAge);
dynamicAge = {
    name: 'Jatin'
};
console.log('dynamicAge -> ', dynamicAge);

let mixedAnyArr: any[] = [];
mixedAnyArr.push('Donal Duck');
mixedAnyArr.push(34);
mixedAnyArr.push(true);

console.log('mixedAnyArr -> ', mixedAnyArr);

let mixedAnyObj: {
    name: any,
    age: any
};

mixedAnyObj = {
    name: 'MixedAnyObj',
    age: 25
};

console.log('mixedAnyObj -> ', mixedAnyObj);

mixedAnyObj = {
    name: 25,
    age: 'MixedAnyObj'
};

console.log('mixedAnyObj -> ', mixedAnyObj);

