let message : string = 'Hello, TypeScript!';
console.log(message); 
// message = 8; // This will cause a type error because 'message' is declared as a string.
let count : number = 42;
console.log(count);

let numberArray : number[] = [1, 2, 3, 4, 5];
console.log(numberArray);
let mixedArray : (string | number)[] = ['Hello', 42, 'World', 3.14];
console.log(mixedArray);

let data :any = 'This can be any type';
console.log(data);
data = 123;
console.log(data);

function greet(name: string): string {
    return `Hello, ${name}!`;
}   

greet('Alice');
// greet(42); // This will cause a type error because the argument must be a string.

