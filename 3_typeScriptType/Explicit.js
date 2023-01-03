// explicit types
var character;
var age;
var isLoggedIn;
// age = 'hey'; // will going to throw an error
character = 'Mickey Mouse';
age = 30;
isLoggedIn = true;
console.log('character -> ', character, ' | age -> ', age, ' | isLoggedIn -> ', isLoggedIn);
// arrays
var ninjas = [];
ninjas.push('Donald Duck');
console.log('ninjas -> ', ninjas);
// union types - using dataTypes
var mixedArr = [];
mixedArr.push('Mickey Mouse');
mixedArr.push(20);
mixedArr.push(false);
console.log('mixedArr -> ', mixedArr);
// Defining the structure of an object
var mixedObj;
mixedObj = {
    name: 'Mario',
    age: 25
};
console.log('mixedObj -> ', mixedObj);
// Dynamic types - using any keyword
var dynamicAge = 25;
console.log('dynamicAge -> ', dynamicAge);
dynamicAge = true;
console.log('dynamicAge -> ', dynamicAge);
dynamicAge = 'hello';
console.log('dynamicAge -> ', dynamicAge);
dynamicAge = {
    name: 'Jatin'
};
console.log('dynamicAge -> ', dynamicAge);
var mixedAnyArr = [];
mixedAnyArr.push('Donal Duck');
mixedAnyArr.push(34);
mixedAnyArr.push(true);
console.log('mixedAnyArr -> ', mixedAnyArr);
var mixedAnyObj;
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
