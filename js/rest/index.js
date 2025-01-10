//rest - também utiliza os três pontos, coleta o restante dos valores

function sum(...nums) {
    return nums.reduce((total, el) => total + el);

}

console.log(sum(1, 2, 3))

//Não espalhamos como no spread e sim coletamos coisas em um único parâmetro

function raceResults (gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`Thanks to everyone else: ${everyoneElse}`);
}

raceResults('Noob', 'Collin', 'Leon', 'Rusty', 'Wyatt', 'Tommy', 'Tobias', 'Lindsay', 'Maeby', 'George Michael', 'Michael', 'Gob', 'Buster');