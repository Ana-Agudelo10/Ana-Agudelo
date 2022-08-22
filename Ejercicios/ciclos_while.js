


//2. Escribe un programa que pida tres numeros y que reciba si son los tres iguales, si hay dos iguales o si son los tres distintos

/*var a = Math.trunc(Math.random() * 100);
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
} */

//3. Pedir un numero entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el numero exceda los limites emita un mensaje y finalice el programa.
/*var a = Math.trunc(Math.random() * 9999);
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
}*/

//4. Pedir una nota de 0 a 10 y mostrarla de forma:Insuficiente, Suciente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores.

/*var n = Math.trunc(Math.random() *(10-1)+1);
switch (n) {
    case 10:
    case 9:
        calificacion = "SUPERIOR";
        break;
    case 8:
    case 7:
        calificacion: "BIEN";
        break;
    case 6:
    case 5:
        calificacion = "SUFICIENTE";
        break;
    case 4:
    case 3:
        calificacion = "INSUFICIENTE";
        break;
    case 2:
    case 1:
    case 0:  
        calificacion = "BAJA"
        break;
    default:
        calificacion = "NOTA ERRÓNEA"
        break;
}
console.log(`Nota ingresada ${n}`)
console.log(`Ha optenido una calificación ${calificacion}`)*/

//5. En un juego de preguntas a las que se responde "Sí" o "No" gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
//1. Colon descubrio America?
//2. La independencia de Colombia fue en el año 1810?
//3. The Doors fue un grupo de rock Americano?
console.log()
var a = Si;

if (a == Si){
  console.log()
}


//Pida un numero al usuario que representa dias del año. Diga a que mes del año corresponde así. Si el numero es menor o igual a 31 indica que esta en enero, pero si el numero por ejemplo es 32 indica que es el 1 de febrero. No tenga en cuenta si el año es bisiesto, es decir siempre febrero tiene 28 dias.
                         
//15. Diseñar e implementar un programa que solicite a su usuario un valor no negativo n y visualice la siguiente salide:
   
var n = Math.trunc(Math.random() * 100);

/*x = "";
for(let i = n; i>0; i--){
    
    for (let j = 1; j < i; j++) {
        x = x + j.toString();
        
    }
    x = x + "\n"
}
console.log(x)*/

//14. Calcular todos los numeros de 3 cifras tales que la suma de los cubos de las cifras es igual al valor del numero



