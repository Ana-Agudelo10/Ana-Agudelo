//3. Pedir un numero entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el numero exceda los limites emita un mensaje y finalice el programa.

var a = Math.trunc(Math.random() * 9999);
if (a < 10) {
  console.log(`Tiene una cifra ${a}`);
} else if (a < 100) {
  console.log(`Tiene dos cifras ${a}`);
} else if (a < 1000) {
  console.log(`Tiene tres cifras ${a}`);
} else if (a < 10000) {
  console.log(`Tiene cuatro cifras ${a}`);
} else {
  console.log(`El numero excede los limites ${a}`);
}