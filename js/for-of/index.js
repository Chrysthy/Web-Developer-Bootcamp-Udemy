const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners']

for (let i = 0; i < subreddits.length; i++) {

    console.log(`Visit reddit.com/r${subreddits[i]}`);
}

for (let sub of subreddits) {
    console.log(sub);
}


//o exemplo anterior de nested loops
const seatingChart = [
    ['Noob', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];

//     console.log(`Row #${i + 1}`);

//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

//usando for of

for (let row of seatingChart) {

    for (let student of row) {

        console.log(student);
    }
}


//other iterable objects
//strings

for (let char of "Hello Word") {
    console.log(char);
}


//objects
//nesses casos usando o for in para iterar sobre o objeto

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}


let total = 0
let scores = Object.values(testScores)

for (let score of scores) {
    total += score

}

console.log(total / scores.length);
