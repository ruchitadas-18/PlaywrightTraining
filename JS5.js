//Why use var and not let/const
//var is hoisted and initialized with undefined

//const and let ===> restrict hoisting
//block scoped ---> {two curly  }
// inside block we can use let and const --> local context



let x = 10;
const y = 20;
var a = 30;

//Temporal Dead Zone (TDZ) -- time between the creation of variable and its initialization
console.log(a); //undefined
console.log(x); //ReferenceError
console.log(y); //ReferenceError

//memory is allocated for var z and initialized with undefined
//memory is allocated for let x and const y but not initialized

//lexical environment -- where variable is declared
function test(){
    let b = 40;        //local context //priority over global context
    console.log(b);
}

let b = 50;            //global context
test();

