// Number
var first = 12.0; // number   
var second = 0x37CF; // hexadecimal  
var third = 255; // octal  
var fourth = 57; // binary   
console.log(first); // 123  
console.log(second); // 14287  
console.log(third); // 255  
console.log(fourth); // 57 
// String
var empName = "Jatin";
var empDept = "IT";
// Before-ES6
var output1 = empName + " works in the " + empDept + " department.";
// After-ES6
var output2 = "".concat(empName, " works in the ").concat(empDept, " department.");
console.log(output1); //Jatin works in the IT department.   
console.log(output2); //Jatin works in the IT department.  
// Void
var tempNum = undefined;
tempNum = null;
// tempNum = 123;      //Error --> error TS2322: Type 'number' is not assignable to type 'void'.
console.log(tempNum);
// Null
var num = null;
var bool = null;
var str = null;
console.log(num);
console.log(bool);
console.log(str);
// Undefined
var numb = undefined;
var boole = undefined;
var stri = undefined;
console.log(numb);
console.log(boole);
console.log(stri);
// Any type
var val = 'Hi';
console.log(val);
val = 555; // OK
console.log(val);
val = true; // OK
console.log(val);
