//destructuring Arrays
//descompactar ou extrair valores de um objeto ou array e podemos descompactá-los e colocá-los em variáveis separadas

//Não estamos removando e sim copiamos o valor para uma nova variável

const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(gold);
console.log(silver);
console.log(bronze);
console.log(everyoneElse);