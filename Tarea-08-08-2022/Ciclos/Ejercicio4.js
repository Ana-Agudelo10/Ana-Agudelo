//4. Determinar cuales y cuantos números perfectos hay entre 1 y 1000?
for (let numero = 0; numero < 1000; numero++) {

    total = 0

    for (let a = 0; a < numero; a++) {
        if (numero % a == 0) {
            total = total + a

        }
    }

    if (total == numero) {
        console.log(`El numero ${numero} es perfecto `)
    }
}