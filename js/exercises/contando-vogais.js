//Contando Vogais

let texto = "Olá Mundo"
let vogais = 0

for (let caracteres of texto.toLowerCase()) {

    if (caracteres == "a" || caracteres == "e" || caracteres == "i" || caracteres == "o" || caracteres == "u") {
        vogais++

    }
}

console.log(`O número de vogais da palavra inserida é ${vogais}`);