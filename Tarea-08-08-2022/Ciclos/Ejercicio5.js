//5. ¿Cuáles y cuántos son los números primos comprendidos entre 1 y 1000?
for (let numero = 0; numero < 1000; numero++) {
    
divisores = 0

for (let a = 0; a <= numero; a++) {
    if (numero%a==0) {
        divisores++
    }
}
if (divisores == 2) {
    console.log(`el numero ${numero} es primo `)
}
}