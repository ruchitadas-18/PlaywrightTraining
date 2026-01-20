//BigInt
//max safe integer in JS is 2^53 -1
let max = BigInt(Number.MAX_SAFE_INTEGER);
console.log("Max Safe Integer: "+max);

let x = 1n;

let y = BigInt(9007199254741991);

let sum = x + y;
console.log("Sum of BigInt: "+sum);

//Symbol Type
//Symbols are unique and immutable data types used as identifiers for object properties.
//Every time you create a symbol, even with the same description, it is unique.

let sym1: symbol = Symbol("key1");
let sym2: symbol = Symbol("key1");
console.log("Are sym1 and sym2 equal? "+(sym1 === sym2));

const id = Symbol("id");
const newObject = {
    [id]:123,
    name:"Test"
}
console.log("Object with Symbol property: ", newObject);
console.log("Accessing Symbol property: "+newObject[id]);

