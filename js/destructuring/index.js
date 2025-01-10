//destructuring Arrays
//descompactar ou extrair valores de um objeto ou array e podemos descompactá-los e colocá-los em variáveis separadas

//Não estamos removando e sim copiamos o valor para uma nova variável

const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(`Gold medal goes to: ${gold}`);
console.log(`Silver medal goes to: ${silver}`);
console.log(`Bronze medal goes to: ${bronze}`);
console.log(`Thanks to everyone else: ${everyoneElse}`);