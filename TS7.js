//Any and Unknown Types in TypeScript
// Scenario used any
// migration from js to ts
//dynamic typing
// 3rd party librarys without types
var userInput;
userInput = 5;
userInput = "Max";
userInput = true;
console.log("User Input: ", userInput);
//Unknown type
// type safety -> you need to do type checking before performing operations
//different from any
// you cannot perform operations directly on unknown type without type checking
// Scenario used unknown
var userInput2;
userInput2 = 5;
userInput2 = "Max";
userInput2 = true;
console.log("User Input 2: ", userInput2);
// Type checking before using unknown type
var userName;
if (typeof userInput2 === "string") {
    userName = userInput2; //safe to assign
    console.log("User Name: ", userName);
}
//return type of functions as unknown
function fetchData() {
    // Simulating fetching data
    return { id: 1, name: "Sample Data" };
}
var data = fetchData();
if (typeof data === "object" && data !== null && 'name' in data) {
    console.log("Fetched Data Name: ", data.name);
}
