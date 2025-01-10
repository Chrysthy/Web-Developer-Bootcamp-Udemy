//spread operator
let maxNum = [13, 4, 5, 21, 9, 12, 22, 5252]
let minNum = [2, 5, 1]

console.log(Math.max(...maxNum));
console.log(Math.min(...minNum));


//spread with arrays literals
//estamos espalhando os elementos de um array dentro de outro array, criando um novo array, combinando, copiando os elementos dos dois arrays
const cats = ['Noob', 'Collin', 'Leon']
const dogs = ['Rusty', 'Wyatt']

const allPets = [1, 2, 3, ...cats, ...dogs, 'Tommy']

console.log(allPets);

let greet = ['Hello', 'Good Morning', 'Good Afternoon', 'Good Night']

console.log(...greet);

//spread with object literals
const feline = { legs: 4, family: 'Felidae' }
const canine = { isFurry: true, family: 'Caninae' }

console.log({ ...feline, color: 'black'});

const catDog = { ...feline, ...canine }
console.log(catDog);


const dataFromForm = {
    email: 'hello@gmail.com',
    password: '12345!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

console.log(newUser);
