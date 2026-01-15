//console.log("Hello, World!");
//console.log(45+67);

//JS - Dynamic Language - change both value and type
//Static Language - change only value, not type

//Variables in JavaScript

var myName = "John";
let myAge = 25;

console.log(myName);
console.log(myAge);

console.log("My name is " + myName + typeof(myName)+ " and I am " + myAge + typeof(myAge) +" years old.");

let isStudent = true;
console.log("Is John a student? " + isStudent + typeof(isStudent));

let height;
console.log("Height: " + height + typeof(height));
//since no value is assigned, it shows 'undefined'

height = null;
console.log("Height: " + height + typeof(height));
//null is an assignment value, but its type is 'object'

