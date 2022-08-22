/*var n1 = prompt('Ingrese un valor para el numerador (1)');
var d1 = prompt('Ingrese un valor para el denominador(1)');
var n2 = prompt('Ingrese un valor para el numerador(2)');
var d2 = prompt('Ingrese un valor para el denominador(2)');*/

/*function suma (n1, d1, n2, d2){
  if (d1 == d2){
    var sumaA =(n1+n2) && (d1+d2);
   alert(sumaA)
  }

  function multiplicacion (n1, n2, d1, d2){
  var x = (n1*n2)/(d1*d2)
}
console.log(x)

function multiplicacion (n1, n2, d1, d2){
  var x = (n1*n2)/(d1*d2);
  console.log(x);
}

function multiplicacion (n1, n2, d1, d2){
  return (n1*n2)/(d1*d2);
 
}

*/

var n1 = Math.floor(Math.random ()*100+1);
for (let i=0; i<=0; ++i)
  	console.log('Numerador 1 = '+n1)

var d1 = Math.floor(Math.random ()*100+1);
for (let i=0; i<=0; ++i)
    console.log('Denominador 1 = '+d1)

var n2 = Math.floor(Math.random ()*100+1);
for (let i=0; i<=0; ++i)
    console.log('Numerador 2 = '+n2)

var d2 = Math.floor(Math.random ()*100+1);
for (let i=0; i<=0; ++i)
    console.log('Denominador 2 = '+d2)


var sumaA=(n1*d2)+(d1*n2);
var sumaB = (d1*d2);
console.log('La suma de los fraccionarios ' +n1+ ' sobre ' +d1+ ' y ' +n2+ ' sobre ' +d2+ ' equivale a ' +sumaA/sumaB);

var restaA=(n1*d2)-(d1*n2);
var restaB = (d1*d2);
console.log('La resta de los fraccionarios ' +n1+ ' sobre ' +d1+ ' y ' +n2+ ' sobre ' +d2+ ' equivale a '+restaA/restaB);

var multiplicacionA=(n1*n2);
var multiplicacionB = (d1*d2);
console.log('La multiplicacion de los fraccionarios ' +n1+ ' sobre ' +d1+ ' y ' +n2+ ' sobre ' +d2+ ' equivale a '+multiplicacionA/multiplicacionB)

var divisionA=(n1/d2);
var divisionB = (d1/n2);
console.log('La division de los fraccionarios ' +n1+ ' sobre ' +d1+ ' y ' +n2+ ' sobre ' +d2+ ' equivale a '+divisionA/divisionB)