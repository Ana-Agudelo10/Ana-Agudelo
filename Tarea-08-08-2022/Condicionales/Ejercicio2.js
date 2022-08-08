//2. Escribe un programa que pida tres numeros y que reciba si son los tres iguales, si hay dos iguales o si son los tres distintos

var a = Math.trunc(Math.random() * 100);
var b = Math.trunc(Math.random() * 100);
var c = Math.trunc(Math.random() * 100);

if (a == b) {
  console.log(`Hay dos numeros iguales: ${a} ${b}`);
if (a == c)
    console.log(`Hay dos numeros iguales: ${a} ${c}`);
if (b == c)
    console.log(`Los tres son iguales: ${a} ${b} ${c}`);
} else if (a == c) {
  console.log(`Hay dos numeros iguales: ${a} ${c}`);
} else if (b == c) {
  console.log(`Hay dos numeros iguales: ${c} ${b}`);
} else {
  console.log(`Los tres son distintos ${a} ${b} ${c}`);  
}