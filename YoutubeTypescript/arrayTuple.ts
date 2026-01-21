//Arrays
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);

let students: Array<[number, string]> = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];
students.push([4, "David"]);
console.log("Students Array of Tuples:", students);
students.forEach(([id, name]) => {
    console.log(`ID: ${id}, Name: ${name}`);
});

let colege:ReadonlyArray<string>=["CS","IT","EXTC","MECH","CIVIL"];
//colege.push("AIDS"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log("Colleges:", colege);

//Tuples -> collection of different types
let employee: [number, string, boolean] = [101, "John Doe", true];
console.log("Employee Tuple:", employee);

//tuple -> array of fixed size and types
var add: string[] = ["Hello", "World"];
var emp: [number, string, boolean] = [101, "John Doe", true];

emp.push("Noida"); // Allowed: Adding an extra boolean value
console.log("Employee after push:", emp);

// Destructuring the tuple
let [empId, empName, empStatus] = emp;
console.log(`Employee ID: ${empId}, Name: ${empName}, Status: ${empStatus}`);   
