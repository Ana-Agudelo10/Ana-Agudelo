//2. Determinar si un numero es o no es primo
numero = Math.floor(Math.random()*100)
divisores = 0

for (let a = 0; a <= numero; a++) {
    if (numero%a==0) {
        divisores++
    }
}
if (divisores == 2) {
    console.log(`el numero ${numero} es primo `)
}else{console.log(`el numero ${numero} no es primo `)}