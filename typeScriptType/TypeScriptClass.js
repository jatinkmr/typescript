// TypeScript basic class
console.log('Basic TypeScript Class');
var Student = /** @class */ (function () {
    function Student(_RollNo, Name) {
        this.RollNo = _RollNo;
        this.Name = Name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
    };
    return Student;
}());
console.log('student_1');
var student_1 = new Student(1, "Jatin");
student_1.showDetails();
console.log('student_2');
var student_2 = new Student(2, "Amrit");
student_2.showDetails();
// TypeScript Members: Visibility
// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jatin Kamboj");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
var PersonPrivate = /** @class */ (function () {
    // name is a private member variable
    function PersonPrivate(name) {
        this.name = name;
    }
    PersonPrivate.prototype.getName = function () {
        return this.name;
    };
    return PersonPrivate;
}());
var personPrivate = new PersonPrivate("Jatin Kamboj!!");
console.log(personPrivate.getName());
