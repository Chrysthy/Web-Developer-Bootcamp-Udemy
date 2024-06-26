//normal function
// const add = function (x, y) {
//     return x + y
// }

//-----------------------
//arrow function
//-----------------------

// const add = (x, y) => {
//     return x + y
// }

// console.log(add(9, 4));


// const square = (x) => {
//     return x * x
// }

// console.log(square(9));


// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// console.log(rollDie());

//-----------------------
//implicit Returns
//-----------------------

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

console.log(rollDie());


const add = (a, b) => a + b

console.log(add(2, 2));


//-------------------------------
//Arrow Functions Wrapup
//-------------------------------

