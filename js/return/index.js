//no return
// function add(x, y) {
//     console.log(x + y);
// }

// add(3, 3)

//return
// function add(x, y) {

//     let sum = x + y;

//     return sum;

// }

// add(5, 5)



// function add(x, y) {

//     let sum = x + y;

//     return sum;

//     //não irá funcionar depois do return
//     console.log("end of dunction")
// }

// add(5, 5)


function add(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }

    return x + y

}

add('a', 5)