//var var_name:type = value;
var num:number = 10;
var str:string = "Hello, TypeScript!";
var isActive:boolean = true;

//redeclaration with var
let num1:number = 5;

let sum:number = num + num1;
console.log("Sum:", sum);

//decimal value
var decimalValue:number = 10.5;
console.log("Decimal Value:", decimalValue);

//hexadecimal value
var hexValue:number = 0xff;
console.log("Hexadecimal Value:", hexValue);

//binary value  
var binaryValue:number = 0b1010;
console.log("Binary Value:", binaryValue);

//octal value   
var octalValue:number = 0o12;
console.log("Octal Value:", octalValue);    

//mismatch values / concatenation
let mismatch = str + num; 
console.log(mismatch); 

let str1 = str + String(num);
let mismatch1 = num+str;
console.log(typeof(mismatch1));
console.log(mismatch1);

let data:string | number= "The value of num is: ";
data= num;
console.log(data);

