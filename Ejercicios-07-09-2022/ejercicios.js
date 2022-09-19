//CALLBACK
function saludar(saludo){
    saludo();
}

saludar(function(nombre){
    console.log(`Hola ${nombre}`)
})

//setTimeout(funcion, tiempo_ms);

//Ejemplo 1

/*setTimeout(function(){
    console.log('Hola')
}, 2000);*/ // Ejecuta el callback despues de que hayan pasado 2000 milisegundos.

//Ejemplo 2

//Usando función anonima
/*console.log('A')
setTimeout(function () {
    console.log('B')
},2000)
console.log('C')*/
/* Resultado del código anterior
 A
 C
 B  Despues de 2 segundo*/

//Ejemplo 3

 /*console.log('Mesa')
 setTimeout(function(){
    console.log('Mesa')
 }, 500)

 setTimeout(function(){
    console.log('Mesa que mas aplauda')
 }, 1000);

 setTimeout(function(){
    console.log('Mesa que mas aplauda')
 }, 1500);

 setTimeout(function(){
    console.log('Mesa que mas aplauda')
 }, 2000);

 setTimeout(function(){
    console.log('Le mando')
 }, 2500);
 setTimeout(function(){
    console.log('Le mando')
 }, 3000);
 setTimeout(function(){
    console.log('Le mando')
 }, 3500);
 setTimeout(function(){
    console.log('La niña')
 },4500);
 setTimeout(function(){
    console.log('Za')
 },5000);
 setTimeout(function(){
    console.log('Za')
 },5500);
 setTimeout(function(){
    console.log('Za')
 },6000);
 setTimeout(function(){
    console.log('Ya cu Za')
 },6500);
 setTimeout(function(){
    console.log('Ya cu Za')
 },7000);
*/

//SETINTERVAL

let identificadorIntervalodeTiempo;

/*function mandarMensaje() {
   console.log("Ha pasado 1 segundo");
}*/

function repetirCadaSegundo() {
   identificadorIntervalodeTiempo = setInterval(function mandarMensaje() {
      console.log("Ha pasado 1 segundo");
   }, 1000);
}

repetirCadaSegundo()

function finalizar(){
   clearInterval(identificadorIntervalodeTiempo); 
   console.log("El programa a finalizado")
}

setTimeout(finalizar,5000)

/*setInterval(function(){
   console.log("Ha pasado un segundo")
}, 1000)
clearInterval(function(setInterval){
   console.log("El programa a terminado")
}, 5000)*/

//SETCLEAR

//Ejemplo 1

/*const set1 = new Set(["Tom", "Eduar", "José"]);
set1.add("Tom"),
set1.add("Eduar"),
set1.add("José");

console.log("Elementos antes de borrar: ",set1)
set1.clear()
console.log("Elementos despues de borrar: ",set1)*/

 //PROMESAS
/*let x = 11
 const p= new Promise((resolve, reject)=>{
    if(x==10){
        resolve('La variable es igual a 10');
    }else{
        reject('La variable no es igual a 10')
    }
 });*/


