//11. Solicitar 2 números al usuario e imprimir el cociente y el residuo del mayor en el menor sin utilizar la división ni el mod.
a = Math.floor(Math.random()*100)
b = Math.floor(Math.random()*100)

if (a>b) {
    n1 = a
    n2 = b
} else {
    n1 = b 
    n2 = a
}
total = 0 
cociente = 0 
residuo = 0 
while (total<n1) {
    residuo=0
    cociente++
    total=(n2 * cociente) + residuo
    while (total<(n1) && residuo < (n2-1)) {
        
        residuo++
        
        total=(n2 * cociente) + residuo
    }
    
    if (n2==0 || n1 ==0 ) {
        cociente = 'indefinido'
        break
    }
}

console.log(`El resultado de ${n1} entre ${n2} es ${cociente} y el residuo es ${residuo}`)