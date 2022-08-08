//11. Escribir un algoritmo que pida un valor entero que equivale a una cantidad de DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y 1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de dos mil.

var n = 282000

if (n >= 50000) {
  a = Math.trunc(n / 50000)
  n = n - (a * 50000)
} else {
  a = 0
} if (n >= 20000) {
  b = Math.trunc(n / 20000)
  n = n - (b * 20000)
} else {
  b = 0
} if (n >= 10000) {
  c = Math.trunc(n / 10000)
  n = n - (c * 10000)
} else {
  c = 0
} if (n >= 5000) {
  d = Math.trunc(n / 5000)
  n = n - (d * 5000)
} else {
  d = 0
} if (n >= 2000) {
  e = Math.trunc(n / 2000)
  n = n - (e * 2000)
} else {
  e = 0
} if (n >= 1000) {
  f = Math.trunc(n / 1000)
  n = n - (f * 1000)
} else {
  f = 0
}
console.log(`Billetes de 50000 ${a}, Billetes de 20000 ${b}, Billetes de 10000 ${c}, Billetes de 5000 ${d}, Billetes de 2000 ${e}, Billetes de 1000 ${f}`)