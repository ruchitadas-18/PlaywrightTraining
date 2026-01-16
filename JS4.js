//How is JS is executed

//execution context --- environment where JS code is executed
//1. Global Execution Context (GEC) -- default or base context where your code is executed
//2. Function Execution Context (FEC) -- created whenever a function is invoke
//3. Execution Stack -- stack of multiple execution context

//2 phases of execution
//1. Creation Phase/Memory Phase-- memory is allocated for variables and functions --- Variable Environment (VO)
//2. Execution Phase/Code Phase -- code is executed line by line

//JavaScript is synchronous and single threaded language
//synchronous -- line by line execution
//single threaded -- one command at a time

//Hoisting -- default behavior of moving declarations to the top
//Only declarations are hoisted, not initializations


console.log(a); //undefined --- memory phase
var a = 10;
console.log(a); //10 --- code phase

console.log(this.a);
console.log(window.a);
var a = 20;
console.log(this.a);
console.log(window.a);

//this keyword -- refers to the current execution context
//window object -- global object in browser environment
//In global context, this refers to window object

//Is this and window same?
console.log(this === window); //true    


