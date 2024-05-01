// Important array methods:
//push(value) - adds value to the END of an array and it gets updated

let movieLine = ['Tom', 'Nancy'];

movieLine.push('Jerry');
movieLine.push('eva');

console.log(movieLine);
console.log(movieLine.length);


//pop() - removes and returns last value in arraya. Does not require any values

movieLine.pop()
console.log(movieLine);

//Example two

let barbell = [];

barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.push(2.5);

console.log(barbell);
console.log(barbell.length);

barbell.pop();
barbell.pop();
barbell.pop();

console.log(barbell);
console.log(barbell.length);


//unshift(value) - adds value to START of an array
movieLine.unshift('VIP')
console.log(movieLine);


//shift() - removes and returns first element in an array
movieLine.shift()
console.log(movieLine);


// concat() concatenando duas ou mais arrays para forma uma nova array

let cats = ['Noob', 'Leon', 'Collin']
let dogs = ['Rusty', 'Wyatt']
let allPets = cats.concat(dogs);

console.log(allPets);


//includes() é um exemplo de método booleano, o que significa que retorna true ou false

console.log(cats.includes('Leon'));
console.log(cats.includes('leon')); // retorna false por causa da letra minúscula


//indexOf() o índice se refere aos índices de uma matriz

console.log(allPets.indexOf('Noob'))
console.log(allPets.indexOf('Rusty'))
console.log(allPets.indexOf('Peppa')) //não existe


//reverse() irá reverter uma array. É conhecido como um método destrutivo. Vai mudar o array inicial

console.log(allPets);
console.log(allPets.reverse());


//slice() é uma forma de obter uma cópia de uma parte/pedaço de um array. Os 3 primeiros, ou os dois últimos ou no meio.

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors.slice()); //retona a array igual
console.log(colors.slice(2)); //retorna do yellow até o final
console.log(colors.slice(2, 5)); //retona do yellow até o blue, pois não inclui o 5 índice
console.log(colors.slice(-3)); //podemos usar o negativo e  retornará os últomos 3.


//splice() muda o conteúdo de uma array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no local. Não faz uma cópia do array original

//months.splice(onde vamos começar, quantas coisas iremos excluir ou nenhuma (0 - zero), e opcionalmente, algo para inserir)

console.log(colors.splice(5, 1))
console.log(colors);

console.log(colors.splice(1, 0, 'red-orange'));
console.log(colors.splice(3, 0, 'yellow-green', 'forestgreen'));


