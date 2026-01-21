//Array and functions in JavaScript

//Arrays and functions are object
//Object is only reference data type in JS that can hold multiple values

//1. Create an array of numbers from 1 to 10.
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("Original Array: ", numbers); 
console.log("Type of numbers: " + typeof(numbers)); //object
console.log(numbers[3]) //3
console.log("Type of numbers: " + typeof(numbers[3]));

//2. Modify the 5th element to be 50.
numbers[4] = 50;
console.log("Modified Array: ", numbers);

//3. Add a new number 11 at the end of the array.
numbers.push(11);
console.log("Array after adding 11: ", numbers);

//4. Remove the first element of the array.
numbers.shift();
console.log("Array after removing first element: ", numbers);   

//-- Functions --//

greet("John");

function greet(name){
    console.log("Hello, " + name + "!") ;
}

greet("Alice");
greet("Bob");

