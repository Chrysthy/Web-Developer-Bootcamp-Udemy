let somaPares = 0

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        somaPares += i
    }
}

console.log(`A soma dos números pares de 1 a 20 é: ${somaPares}`);