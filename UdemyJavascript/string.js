//strings
let day = " string day"

console.log(day.length)
console.log(day.slice(0,4))
console.log(day[1])
//spilt the string
let splitDay = day.split("i") //Variable acting as array
console.log(splitDay[1])
console.log(splitDay[1].trim()) // remove the whitespaces

//string to number
let num = "1234", num1 = "45678"
console.log(parseInt(num1)-parseInt(num))

//concating
let newQuota = day +"type of data day"
console.log(newQuota)

let val = newQuota.indexOf("type")
console.log(val)

//counting how many times day  appears
let count =0;
while(val!==-1){
    count++
    val = newQuota.indexOf("day", val+1)
}
console.log(count)




