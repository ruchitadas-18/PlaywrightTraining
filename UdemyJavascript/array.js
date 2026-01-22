//Array
let marks = Array(6)
let newMarks = new Array(20,30,40,50,60,70)
console.log(marks)
console.log(newMarks)

let fruits = ['Apple', 'Banana', 'Mango', 'Orange']
console.log(fruits)
console.log(fruits.length)
console.log(fruits[2])
fruits[1] = 'Grapes'
console.log(fruits)
fruits.push('Pineapple')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift('Strawberry') // unshift adds element at the beginning
console.log(fruits)
fruits.shift() // shift removes element from the beginning
console.log(fruits)
fruits.length = 3 // truncating the array
console.log(fruits)
console.log(fruits.indexOf('Mango'))
console.log(fruits.includes('Banana')) //search for the element in array
console.log(fruits.sort()) //sort the array
fruits.slice(1,3) //slicing the array
console.log(fruits)

//reduce filter and map
let numbers = [1,2,3,4,5,6,7,8,9,10]

let evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

let squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers)

//accumulator is the total value 
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum)

//map
let mappedArray =evenNumbers.map(number => number*3)
console.log(mappedArray)
 
 //Sorting with strings
 fruits.sort()
 console.log(fruits)

 //Sorting with numbers -> sort by default does not work
let a = [78,73,12,9,4,1]
a.sort(function(a,b){
    return a-b
})
//bubble sort
console.log (a.sort((a,b)=>a-b))


