"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var var_name:type = value;
var num = 10;
var str = "Hello, TypeScript!";
var isActive = true;
//redeclaration with var
let num1 = 5;
let sum = num + num1;
console.log("Sum:", sum);
//decimal value
var decimalValue = 10.5;
console.log("Decimal Value:", decimalValue);
//hexadecimal value
var hexValue = 0xff;
console.log("Hexadecimal Value:", hexValue);
//binary value  
var binaryValue = 0b1010;
console.log("Binary Value:", binaryValue);
//octal value   
var octalValue = 0o12;
console.log("Octal Value:", octalValue);
//mismatch values / concatenation
let mismatch = str + num;
console.log(mismatch);
let str1 = str + String(num);
let mismatch1 = num + str;
console.log(typeof (mismatch1));
console.log(mismatch1);
let data = "The value of num is: ";
data = num;
console.log(data);
//# sourceMappingURL=TS2.js.map