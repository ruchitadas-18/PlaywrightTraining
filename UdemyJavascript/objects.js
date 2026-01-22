//objects is collection of prperties

let person = {
    firstName : "New",
    lastName : "Member",
    fullName: function(){
        console.log(this.firstName+ this.lastName)
    }
}

console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])
person.gender = "Male"
console.log(person)
delete person.firstName
console.log(person)
console.log("firstName" in person)

for(let key in person){
    console.log(person[key])
}