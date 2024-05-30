// let greet = function () {
//     console.log("Hi");
// }

// greet()


// function callTwice(func) {

//     func()
//     func()
// }


// function callTenTimes(f) {

//     for (let i = 0; i < 10; i++) {
//         f()

//     }
// }

// callTenTimes(rollDice)


// function rollDice() {

//     const roll = Math.floor(Math.random() * 6) + 1

//     console.log(roll);

// }

// rollDice()


// callTwice(rollDice)


//******Return a Function*******
// function makeMysteryFunc() {

//     //numero aleatório
//     const randomNum = Math.random()

//     if (randomNum > 0.5) {
//         return function () {

//             console.log("Congrats, I'm a good function");
//             console.log("You win a Million Dollars!");
//         }


//     } else {
//         alert("You have been infected by a computer virus!");
//         alert("Stop trying to close this window!");

//     }
// }

// const mystery = makeMysteryFunc()

// mystery() // "Congrats, I'm a good function" or "You have been infected by a computer virus!"


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18)
console.log(isChild(2));

const isAdult = makeBetweenFunc(19, 65);
console.log(isAdult(60));

const isSenior = makeBetweenFunc(64, 110)
console.log(isSenior(65));
