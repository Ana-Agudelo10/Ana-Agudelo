//13. Solicitar al usuario un número de hasta 9 dígitos e imprimirlo en orden contrario. Ej. digito 6754 imprimo 4576
var n = Math.floor(Math.random() * 100000000);
m=n
cifras = 0 

//esto cuenta cuantas cifras tiene 
while (m>1) {
    cifras++
    m=m/10
}
m=n

na = 0
console.log(cifras)
// f es el numero que se agrega , es decir se utilizara para sumar
for (let a = cifras; a > 0; a--) {
    f = m 
    f = Math.floor(f/(Math.pow(10,a-1)))
    na = na + (f*(Math.pow(10,cifras-a )))
    m=m-(f*(Math.pow(10,a-1)))
    
}
console.log(`el numero paso de ${n} a ${na} `)