// Capitalize Exercise
// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"

function capitalize(str) {

    let firstLetter = str[0].toUpperCase()

    let restOfTheText = str.slice(1)

    return firstLetter + restOfTheText

}

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"