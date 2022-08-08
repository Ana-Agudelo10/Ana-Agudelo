//7. Encontrar un número natural n más pequeño tal que la suma de los n primeros números naturales (1 + 2 + 3 + 4…..) exceda de una cantidad (máximo) introducida por el teclado. Es decir cuantos números de la serie de los naturales debo sumar para superar el dato máximo.
numero = Math.floor(Math.random()*100)
suma=0
console.log(`Para superar el numero ${numero} se debe sumar`)
n = 0 
while (suma<numero) {
    n++
    suma+=n
    console.log(n)
}
console.log(`El total seria  ${suma}`)