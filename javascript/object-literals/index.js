// To make an object literal:
//key: value

const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;


//First Object Exercise

let product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
};





//Accessing Data Out Of Objects

//Array
let number = [12, 27, 14];

console.log(number[1])


//object
let person = {
    firstName: "Mick",
    lastName: "Jagger"
}

console.log(person["firstName"])
console.log(person.lastName);