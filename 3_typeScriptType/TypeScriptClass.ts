// TypeScript basic class
console.log('Basic TypeScript Class');
class Student {
    RollNo: number;
    Name: string;
    constructor(_RollNo: number, Name: string) {
        this.RollNo = _RollNo;
        this.Name = Name;
    }
    showDetails() {
        console.log(this.RollNo + " : " + this.Name);
    }
}

console.log('student_1');
const student_1 = new Student(1, "Jatin");
student_1.showDetails();
console.log('student_2');
const student_2 = new Student(2, "Amrit");
student_2.showDetails();


// TypeScript Members: Visibility

// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jatin Kamboj");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private


class PersonPrivate {
    // name is a private member variable
    public constructor(private name: string) { }

    public getName(): string {
        return this.name;
    }
}

const personPrivate = new PersonPrivate("Jatin Kamboj!!");
console.log(personPrivate.getName());
