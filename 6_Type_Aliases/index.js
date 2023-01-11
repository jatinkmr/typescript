"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has an uid of ${uid}`);
};
logDetails(162, 'Jatin');
const greet = (user) => {
    console.log(`${user.name} says hello and has an uid of ${user.uid}`);
};
greet({ name: 'Jatin', uid: 162 });
