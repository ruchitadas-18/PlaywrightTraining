//Maps
const num = [1,2,3,4,5];
console.log("Original Array:", num);

const squaredNum = num.map((n) => n * n);
console.log("Squared Array using map():", squaredNum);

//Filters
const mixedNum = [1, -2, 3, -4, 5, -6];
console.log("Original Mixed Array:", mixedNum);

const positiveNum = mixedNum.filter((n) => n > 0);
console.log("Positive Numbers using filter():", positiveNum);

//Reduces
const sum = num.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Array using reduce():", sum);   
//accumulator - accumulates the callback's return values
//current - current element being processed


//Combines map, filter, and reduce

const combinedResult = num
    .map((n) => n * n)
    .filter((n) => n > 10)
    .reduce((acc, curr) => acc + curr, 0);
console.log("Combined Result using map, filter, and reduce:", combinedResult);