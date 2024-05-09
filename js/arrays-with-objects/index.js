//array + objects

const shoppingCard = [

    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1

    },

    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },

    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }


]

console.log(shoppingCard[1]);
console.log(shoppingCard[1].price);


//objects + arrays

const students = {

    firstName: 'David',
    lastName: 'Jones',
    strengths:

        ['Music', 'Art'],

    exames: {
        midterm: 92,
        final: 88
    }

}

console.log(students.strengths)
console.log(students.strengths[1])