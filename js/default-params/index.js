function rollDie(numSides) {

    return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie(6));
console.log(rollDie(20));
