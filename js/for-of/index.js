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


//objextsa

