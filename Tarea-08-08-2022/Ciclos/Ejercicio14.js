//14. Calcular todos los números de 3 cifras tales que la suma de los cubos de las cifras es igual al valor del número.
for (let i = 100; i < 1000; i++) {
    n1 = Math.floor(i/100)
    n2 = Math.floor((i-(n1*100))/10)
    n3 = Math.floor(i-(n1*100)-(n2*10))

    if((n1*n1*n1)+(n2*n2*n2)+(n3*n3*n3)==i) {
        console.log(`El cuadrado de las cifras de ${i} sumado da ${i}`)
    }
}