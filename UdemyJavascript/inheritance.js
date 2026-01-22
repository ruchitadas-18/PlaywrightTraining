//Inheritance

const Person = require("./classes");

class Pet extends Person    {
    constructor(firstName, lastName){
        super(firstName,lastName)
    }

    get location(){
        return "Pet Shop"
    }


}

let pet = new Pet("sam", "Dog")
console.log(pet.fullName())
console.log(pet.location)