//Fuctions - First Class Citizens
//Higher Order Functions --> Functions that can take other functions as arguments or return functions as results



function add(a, b) {
    return a + b;
}

console.log(add); //function definition
console.log(add(5, 10)); //15

let sum = function (a, b) {
    return a + b;
}

console.log(sum); //function definition
console.log(sum(5, 10)); //15
//Reference to outside window

function multiple() {
    return this.a * this.b;  
}

function operate(fn,a,b) {
    return fn(a,b);
}

console.log(operate(multiple,5,10)); //NaN
//this refers to window object
//window.a and window.b are undefined