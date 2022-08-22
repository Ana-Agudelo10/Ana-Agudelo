var x = Math.trunc(Math.random()*100);
console.log(x);
if (x%2==0){
console.log( x+'Si es multiplo de 2')}
else{
    console.log(x+' Si es multiplo de 2')
}

// genere dos numeros aleatorios y diga si b es factor de a
/*var a = Math.trunc(Math.random()*100);
console.log(b);
var b = Math.trunc(Math.random()*100);
console.log(b);

if(b)*/

x=0;
if (x>0){
    console.log('Es positivo')
}else if(x<0){
    console.log('Es negativo')
}else
console.log('Es cero')
//Genere dos numeros aleatorios a y b diga cual de los dos es mayor o si son iguales mostrar resultado
var a = Math.trunc(Math.random()*100);
console.log(a);
var b = Math.trunc(Math.random()*100);
console.log(b);

if(a>b){
    console.log('A es mayor a B')
}else if(a<b){
    console.log('B es mayor que A')
}else{
    console.log('A es igual a B')
}    
 
//GENERE 3 NUMEROS ALEATORIOS DIGA CUAL ES EL MENOR NO UTILICE OPERADORES LOGICOS
var a = Math.floor(Math.random ()*100+1);
console.log(a)
var b = Math.floor(Math.random ()*100+1);
console.log(b)
var c = Math.floor(Math.random ()*100+1);
console.log(c)
 
if((a<b)==(c<b)){
    console.log('C es menor')
}else if((b>a)==(b>c)){    
    console.log('B es menor')
}else //((b>a)==(b>a)){
    console.log('A es menor')                    
       
          
 
 
 
 
