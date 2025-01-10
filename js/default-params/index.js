// function rollDie(numSides) {

//     return Math.floor(Math.random() * numSides) + 1
// }

// console.log(rollDie(6));
// console.log(rollDie(20));


function rollDie(numSides = 6) {

    return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie());


function greet(msg, person) {
    console.log(`${msg}, ${person}!`)
}

greet('Hello', 'Sally')