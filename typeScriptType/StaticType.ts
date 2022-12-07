// 1) Number
let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377;            // octal  
let fourth: number = 0b111001;        // binary   

console.log(first);           // 123  
console.log(second);          // 14287  
console.log(third);           // 255  
console.log(fourth);          // 57 

// 2) String
let empName: string = "Jatin";
let empDept: string = "IT";

// Before-ES6
let output1: string = empName + " works in the " + empDept + " department.";

// After-ES6
let output2: string = `${empName} works in the ${empDept} department.`;

console.log(output1)           //Jatin works in the IT department.   
console.log(output2)           //Jatin works in the IT department.  

// 3) Void
let tempNum: void = undefined;
tempNum = null;
// tempNum = 123;      //Error --> error TS2322: Type 'number' is not assignable to type 'void'.
console.log(tempNum);

// 4) Null
let num: number = null;
let bool: boolean = null; 
let str: string = null;

console.log(num);
console.log(bool);
console.log(str);

// 5) Undefined
let numb: number = undefined;
let boole: boolean = undefined;
let stri: string = undefined;

console.log(numb);
console.log(boole);
console.log(stri);

// 6) Any type
let val: any = 'Hi';
console.log(val);
val = 555;   // OK
console.log(val);
val = true;   // OK
console.log(val);