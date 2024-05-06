const password = prompt("Enter a new password")

//password must be 6+ characters
// if (password.length >= 6) {
//     console.log("Long enough password");

// } else {
//     console.log("Password to short! Must be at least 6 characters!");
// }


//Password cannot include spaces
// if (password.indexOf(' ') === -1) {
//     console.log("Good job! No spaces!");

// } else {
//     console.log("Cannot contain spaces");
// }



if (password.length >= 6) {

    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");

    } else {
        console.log("Cannot contain spaces!");
    }

} else {
    console.log("Password to short! Must be at least 6 characters!");
}



