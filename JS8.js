// function + lexical scope = closure
// A function along with its lexical scope forms a closure
// A closure gives you access to an outer function's scope from an inner function

let c = 100;
function outerFunction() {
    c = 10;
    function innerFunction() {
        console.log(c); //references c in outerFunction's scope
    }       
    //innerFunction(); 
    return innerFunction;
}

let a = outerFunction();
// a -> reference to innerFunction is returned
// c in innerFunction refers to c in outerFunction's scope
c = 200;
console.log(a); 
a(); 

function outer() {
    let counter = 0;          
    return function inner() {
        counter++;
        console.log(counter);
    }   
}

let fn = outer();
// this variable has access to the local scope
// therefore it also has reference to counter variable
//thus we can use fn to increment and log counter value
fn(); //1
fn();   //2
fn();   //3 

//Closure ---> Over comsuption of memory ---> memory leak

