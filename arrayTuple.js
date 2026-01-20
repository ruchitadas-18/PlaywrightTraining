//Arrays
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
var students = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];
students.push([4, "David"]);
console.log("Students Array of Tuples:", students);
students.forEach(function (_a) {
    var id = _a[0], name = _a[1];
    console.log("ID: ".concat(id, ", Name: ").concat(name));
});
var colege = ["CS", "IT", "EXTC", "MECH", "CIVIL"];
//colege.push("AIDS"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log("Colleges:", colege);
//Tuples -> collection of different types
var employee = [101, "John Doe", true];
console.log("Employee Tuple:", employee);
//tuple -> array of fixed size and types
