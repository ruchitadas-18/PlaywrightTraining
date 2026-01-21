//Reference Data Types - Objects, Arrays, Functions
//Objects
let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    isEmployed: false
};
console.log("Person Object: ", person);
console.log("Type of person: " + typeof(person));
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName); //dot notation
console.log("Age: " + person["age"]); //bracket notation
console.log("Is Employed: " + person.isEmployed);


let x = "Hello";
let y = x;
y = "Hi";
console.log("x: " + x); //Hello
console.log("y: " + y); //Hi

let p = {value: 10};
let q = p; //reference assignment
q.value = 20; //modifying q also modifies p
console.log("p.value: " + p.value); //20
console.log("q.value: " + q.value); //20