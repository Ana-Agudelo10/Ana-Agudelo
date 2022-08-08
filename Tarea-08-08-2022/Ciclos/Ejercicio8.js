//8. Determinar cuales son los múltiplos de 5 comprendidos entre 1 y N.
numero = Math.floor(Math.random()*100)

for (let a = 1; a < numero; a++) {
    if (a % 5 == 0) {
        console.log(a, "es multiplo de 5")
    }
}