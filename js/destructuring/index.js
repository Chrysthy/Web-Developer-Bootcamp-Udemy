//destructuring Arrays
//descompactar ou extrair valores de um objeto ou array e podemos descompactá-los e colocá-los em variáveis separadas

//Não estamos removando e sim copiamos o valor para uma nova variável

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(gold);
console.log(silver);
console.log(bronze);
console.log(everyoneElse);


//destructuring Objects
//mais comum de ser utilizado
//a ordem não importa, mas o nome sim

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { email, firstName, lastName, bio } = user

// console.log(email);
// console.log(firstName);
// console.log(lastName);
// console.log(bio);

//muda o nome born and died para birthYear e deathYear
// const {born: birthYear} = user;
// const { died: deathYear } = user;


//example 3
//se não tiver o atributo died e colocar como default, ele vai retornar N/A
//se não colocar o default, ele vai retornar undefined
const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const { city, state, died: deathYear = 'N/A' } = user2;

console.log(city);
console.log(state);
console.log(deathYear);


//param destructuring
//é mais frequentemente utilizado com objetos

function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}

function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}



const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },

    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },

    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },

    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },

    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },

    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },

    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },

    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },

    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// let score = movies.filter((movie) => movie.score >= 90);
// console.log(score);

// let score = movies.filter(({ score }) => score >= 90);
// console.log(score);

// let movie = movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

let movie = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

console.log(movie);