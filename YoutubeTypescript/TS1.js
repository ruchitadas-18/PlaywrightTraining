"use strict";
//TypeScript - better version of JavaScript
//TS is a superset of JS
//TS has additional features like static typing, interfaces, and advanced tooling support
//TS code needs to be compiled to JS before it can be run in a browser or Node.js environment
Object.defineProperty(exports, "__esModule", { value: true });
//Why use TypeScript?
//1. Static Typing: TS allows developers to define types for variables, function parameters, and return values, which helps catch type-related errors during development rather than at runtime.
var age = 25;
//age = "twenty-five"; Error: Type 'string' is not assignable to type 'number'
//type is not mandatory
var name1 = "Alice";
//name1 = 30; Error: Type 'number' is not assignable to type 'string'
//2. Improved Tooling: TS provides enhanced code editing features such as autocompletion, type checking, and refactoring tools, which improve developer productivity.
//3. Better Code Organization: TS supports modern JavaScript features like modules and classes, making it easier to organize and maintain large codebases.
//4. Early Error Detection: By catching errors at compile time, TS helps reduce runtime errors and improves overall code quality.
//5. Enhanced Collaboration: TS's type system makes it easier for teams to understand and work with each other's code, leading to better collaboration and fewer misunderstandings.
//can't redeclare let and const variables
let city = "New York";
//let city: string = "Los Angeles"; Error: Cannot redeclare block-scoped variable 'city'    
//but can redeclare var variables
var country = "USA";
var country = "Canada"; // No error
//SPecial types in TS
//1. Any: A variable of type 'any' can hold any value, and type checking is disabled for that variable.
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
//2. Unknown: A variable of type 'unknown' can hold any value, but type checking is enforced when performing operations on that variable.
let unknownValue = 10;
//unknownValue = unknownValue + 5; Error: Object is of type 'unknown'.
if (typeof unknownValue === "number") {
    unknownValue = unknownValue + 5; // No error
}
//3. Void: The 'void' type is used to indicate that a function does not return a value.
function logMessage(message) {
    console.log(message);
}
logMessage("Hello, TypeScript!");
//4. Never: The 'never' type represents values that never occur, such as functions that always throw an error or have infinite loops.
function throwError(message) {
    throw new Error(message);
}
//5. Null and Undefined: 'null' and 'undefined' are types that represent the absence of a value.
let u = undefined;
let n = null;
//6. Union Types: A variable can hold multiple types using union types.
let multiType;
multiType = 10;
multiType = "Ten";
let customTypeVar;
customTypeVar = "Hello";
customTypeVar = 42;
//customTypeVar = false; Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
//8. Enum Types: Enums allow you to define a set of named constants.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log("Favorite Color:", favoriteColor); // Output: Favorite Color: 1
//9. function types
function add(a, b) {
    return a + b;
}
let sum;
sum = add;
console.log("Sum:", sum(5, 10)); // Output: Sum: 15
//# sourceMappingURL=TS1.js.map