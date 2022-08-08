//4. Pedir una nota de 0 a 10 y mostrarla de forma:Insuficiente, Suciente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores.

var n = Math.trunc(Math.random() *(10-1)+1);
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
console.log(`Ha optenido una calificación ${calificacion}`)