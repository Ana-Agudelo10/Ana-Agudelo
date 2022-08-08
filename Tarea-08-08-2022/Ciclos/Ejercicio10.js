//10. Algoritmo para hallar el m.c.d de dos números m y n por el algoritmo de Euclides
m = Math.floor(Math.random()*100)
n = Math.floor(Math.random()*100)
s =1 
if (m>n) {
    n1 = m
    n2 = n
} else {
    n1 = n 
    n2 = m
}

while (s>0) {
    c= Math.floor(n1/n2)
    s= n1-(c*n2)
    console.log(n1,n2,c,s)
    n1=n2
    n2=s
}
console.log(`El maximo comun divisor ${n1}`)