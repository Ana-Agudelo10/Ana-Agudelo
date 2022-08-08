//6. Calcular el máximo de números positivos introducidos por teclado, sabiendo que metemos números hasta que introduzcamos uno negativo. El negativo no cuenta.
numero = 0
maximo = 0 
while (numero>=0) {
    numero = Math.floor((Math.random()*100)-50)
    console.log(numero)
    if (numero>maximo) {
        maximo=numero
    }
}
console.log(`El numero mayor es ${maximo}`)