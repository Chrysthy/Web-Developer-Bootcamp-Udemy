//&& - and

// let password = prompt("Enter your password");

// if (password.length > 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password");

// } else {
//     console.log("Invalid password");
// }


//|| - Or

//0-5 free
//5-10 $10
//10-65 $20
//65+ free

// const age = -1;

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE");

// } else if (age >= 5 && age < 10) {
//     console.log("$10");

// } else if (age >= 10 && age < 65) {
//     console.log("$20");

// } else {
//     console.log("Invalid Age");
// }


//! - Not

// let firstName = prompt("Enter your first name");

// if (!firstName) {
//     firstName = prompt("Enter your first name");
// }


const age = 1;

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior");
}

//se age não estiver dentro do intervalo de idade de 0 a 4 anos ou age não for maior ou igual a 65