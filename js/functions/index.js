// function sing() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// sing()

//Um parâmetro
// function greet(firstName) {
//     console.log(`Hey there, ${firstName}!`);
// }

// greet('Chrystine')


//Dois parâmetros
// function greet(firstName, lastName) {
//     console.log(`Hi there, ${firstName} ${lastName[0]}.`);
// }

//ordes matter
// greet("Chrystine", "Martins")


function repeat(str, numTimes) {

    let result = ""
    for (let i = 0; i < numTimes; i++) {

        result += str
    }

    console.log(result);
}

repeat("I love my cats! ", 10)
