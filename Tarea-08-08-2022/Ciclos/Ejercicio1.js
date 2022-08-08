//1. Determinar los divisores de un número introducido por teclado
numero = Math.floor(Math.random()*100)
console.log(numero)

for (let a = 0; a <= numero; a++) {
    if (numero%a==0) {
        console.log(a ,'es divisor de',numero)
    }
}