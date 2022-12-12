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

