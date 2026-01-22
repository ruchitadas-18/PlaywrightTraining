module.exports = class Person{

    age = 23
    get location(){
        return "Canda"
    }

    constructor(fristName, lastName){
        //instant variable
        this.fristName = fristName,
        this.lastName = lastName

    }

    //methods
    fullName(){
        console.log(this.fristName+this.lastName)
    }

}

//let obperson = new Person("Tim","John")
//console.log(obperson.fullName())
//console.log(obperson.age)

