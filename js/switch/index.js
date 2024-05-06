const day = 2;

//usando switch

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
    case 7:
        console.log("Weekend!");
        break;

    default:
        console.log("I don't know that")
        break;
}




//usando if, else if e else

// if (day === 1) {
//     console.log("Monday");

// } else if (day === 2) {
//     console.log("Tuesday");

// } else if (day === 3) {
//     console.log("Wednesday");

// } else if (day === 4) {
//     console.log("Thursday");

// } else if (day === 5) {
//     console.log("Friday");

// } else if (day === 6) {
//     console.log("Saturday");

// } else if (day === 7) {
//     console.log("Sunday");

// } else {
//     console.log("Invalid Day Number")
// }