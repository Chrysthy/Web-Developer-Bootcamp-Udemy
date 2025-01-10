//spread operator
let maxNum = [13, 4, 5, 21, 9, 12, 22, 5252]
let minNum = [2, 5, 1]

console.log(Math.max(...maxNum));
console.log(Math.min(...minNum));


//spread with arrays literals
const cats = ['Noob', 'Collin', 'Leon']
const dogs = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs]

console.log(allPets);