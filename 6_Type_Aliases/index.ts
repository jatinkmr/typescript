type StringOrNum = string | number;
type objWithPropsType = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has an uid of ${uid}`);
};

logDetails(162, 'Jatin');

const greet = (user: objWithPropsType) => {
    console.log(`${user.name} says hello and has an uid of ${user.uid}`);
};

greet({name: 'Jatin', uid: 162});
