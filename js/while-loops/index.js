// let count = 0;

// while (count < 10) {
//     count++;
//     console.log(count);
// }

// const secret = "Noob"

// let guess = prompt('Enter the secret code...')

// while (guess !== secret) {
//     guess = prompt('Enter the secret code...')
// }

// alert("Congrats, you got the secret!")


let input = prompt("Hey, say something!")

while (true) {
    input = prompt(input);

    if (input.toLowerCase() === "stop copying me!") {
        break;
    }
}

alert("Ok, you win!");