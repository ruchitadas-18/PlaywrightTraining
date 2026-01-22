//print javascript
console.log("Hello, JavaScript!");
//alert("Hello, JavaScript!");
//document.write("Hello, JavaScript!");

//variables in javascript
var myName = "John Doe";
let myAge = 25;
const myCountry = "USA";
console.log("Name: " + myName+ ", Age: " + myAge + ", Country: " + myCountry);

//reverse the value - not operatot
console.log(!true); //false

//loops in javascript
const a = true;

if (a) {
    console.log("The value is true");
} else {
    console.log("The value is false");
}

while (false) {
    console.log("This will not print");
}   
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}   

const Person = require('./classes') //importing the class
let person = new Person("Chris", "Merry")
console.log(person.fullName())