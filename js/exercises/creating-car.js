let person = {
    name: "Chrystine",
    age: 32,

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

person.sayHello()

