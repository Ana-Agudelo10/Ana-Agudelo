/*function perfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if(num%i==0){
            suma+=i
        } 
    }
    if(suma==num){
        return `${num} es perfecto`
    }else{
        return `${num} no es perfecto`
    }
}

perfecto(28);
console.log(perfecto(28))*/

//escriba una funcion que dado los 3 lados de un triangulo escriba de que tipo es 


/*function tipo_triangulo(a,b,c) {
        if(a==b&&b==c&&c==a){
            return 'Es un triangulo Equilatero'
        }else if(a==b||b==c||c==a){
            return 'Es un triangulo Isosceles'
        }else{
            return 'Es un triangulo Escaleno'
        }
}
console.log(tipo_triangulo(3,3,3))*/

//Funcion que resuleva el teorema de pitagoras
/*function hipotenusa(ao,ba){
    var c= Math.sqrt(Math.pow(ao,2)+Math.pow(ba,2))
    return c
}

console.log(hipotenusa(2,3))*/

//Condicionales 

//1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
//valor del medio es 11. No use operadores lógicos

/*function numero_aleatorio(){
    var n = Math.floor(Math.random ()*100+1);
    return n
}
var a= numero_aleatorio()
console.log(a)
var b = numero_aleatorio()
console.log(b)
var c = numero_aleatorio()
console.log(c)

function mitad(a,b,c) {
    if (a > b) { 
        if(c > a){
            return a
        }else if(c > b){
            return c
            
          }else if(b > a){
            if(c > b){
                return b
            }
          }else if(b > c){
            return b
          }
      }else if(b > a){          
        if(c > b){
            return b
        }else if(c > a){
          if(b > c){
            return c
          }
        }else if(b > a){
            return a
        }
}

}
console.log(`La mitad es ${mitad(a,b,c)}`)*/

/*var numero_aleatorio=()=>Math.floor(Math.random ()*100+1);

var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

var divisor=(num)=> {
    var divisores=[]
    posicion=0
    for (let a = 0; a <= num; a++) {
        if (num%a==0) {
            divisores[posicion]=a
        }

    }
    return divisores
}
console.log(`Los divisores de ${num} son ${divisor(num)}`)*/

//2. Escribe un programa que pida tres numeros y que reciba si son los tres iguales, si hay dos iguales o si son los tres distintos
/*function numero_aleatorio(){
    var n = Math.floor(Math.random ()*100+1);
    return n
}
var a= numero_aleatorio()
console.log(a)
var b = numero_aleatorio()
console.log(b)
var c = numero_aleatorio()
console.log(c)

function resultado(a,b,c) {
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
}

resultado(a,b,c)*/

//2. Determinar si un numero es o no es primo
/*function numero_aleatorio(){
    return n = Math.floor(Math.random ()*100+1);
}
var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

function primo(num) {
    divisores = 0
    for (let a = 0; a <= num; a++) {
        if (num%a==0) {
            divisores++
        }
    }
    if (divisores == 2) {
        return `${num} es primo`
    }else{
        return `${num} no es primo`
    }
}
console.log(primo(num))*/

/*var numero_aleatorio=()=>Math.floor(Math.random ()*100+1);

var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

var primo=(num)=>{
    divisores = 0
    for (let a = 0; a <= num; a++) {
        if (num%a==0) {
            divisores++
        }
    }
    if (divisores == 2) {
        return `${num} es primo`
    }else{
        return `${num} no es primo`
    }
}
console.log(primo(num))*/

//ciclos

//3. Determinar si un número es o no es perfecto. Un numero es perfecto si la suma de sus divisores sin incluir el propio número es igual a este
/*function numero_aleatorio(){
    return n = Math.floor(Math.random ()*100+1);
}
var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

function name(params) {
    total = 0

for (let a = 0; a<numero; a++) {
    if (numero %a==0) {
        total=total+a 
        console.log(a)
    }
}

if (total == numero) {
    console.log(`el numero ${numero} es perfecto `)
}else{console.log(`el numero ${numero} no es perfecto `)}
}

console.log(total)*/

/*const x= 100
const saludar=()=>{
    return `Hola Soacha`;
}
console.log(saludar())

//Función felcha sin parametros
const saludar2=()=>'Hola Soacha';
console.log(saludar2());

//Función flecha con un paramtro
const saludar3=nombre=> `Hola ${nombre} bienvenido al CIDE`;
console.log(saludar3('Batman'));

const miFuncion=(ao,ba)=>Math.sqrt(Math.pow(ao,2)+Math.pow(ba,2));
console.log(miFuncion(2,3))*/

/*var numero_aleatorio=()=>Math.floor(Math.random ()*100+1);

var a= numero_aleatorio()
console.log(a)
var b = numero_aleatorio()
console.log(b)
var c = numero_aleatorio()
console.log(c)

var mitad=(a,b,c)=>{
    if (a > b) { 
        if(c > a){
            return a
        }else if(c > b){
            return c
            
          }else if(b > a){
            if(c > b){
                return b
            }
          }else if(b > c){
            return b
          }
      }else if(b > a){          
        if(c > b){
            return b
        }else if(c > a){
          if(b > c){
            return c
          }
        }else if(b > a){
            return a
        }
    }
}
console.log(`La mitad es ${mitad(a,b,c)}`)*/





