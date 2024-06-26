// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters.

let usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']

function validUserNames(usernames) {

    return usernames.filter(name => name.length < 10)

}

const validNames = validUserNames(usernames);
console.log(validNames);