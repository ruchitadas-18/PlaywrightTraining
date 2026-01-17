//Arrow Function

let add = (x, y) => {
    return x + y;
}

console.log(add(5, 10)); //15

//Shorter syntax for single parameter and single return statement
let square = x => x * x;
console.log(square(6)); //36

//No parameters
let greet = () => console.log("Hello!");
greet(); //Hello!

//Outer Function
let c = 100;
function outerFunction() {
    c = 10;
    function innerFunction() {
        console.log(c); //10
    }       
    //innerFunction(); 
    return innerFunction;
}

let a = outerFunction(); //undefined
//a(); //TypeError: a is not a function
c = 200;
console.log(a); //undefined //200 --> reference to c is saved in innerFunction
a(); //TypeError: a is not a function



