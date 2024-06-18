const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//não comum
// function print(element) {
//     console.log(element);
// }

//muito comum
numbers.forEach(function (el) {

    if (el % 2 === 0) {

        console.log(el);
    }

})

// for (let el of numbers) {
//     console.log(el);
// }