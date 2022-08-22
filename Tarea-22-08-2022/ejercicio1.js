//Condicionales 

//1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
//valor del medio es 11. No use operadores lógicos

//FUNCIÓN SIMPLE
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

//FUNCIÓN FLECHA
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

//2. Escribe un programa que pida tres numeros y que reciba si son los tres iguales, si hay dos iguales o si son los tres distintos

//FUNCIÓN SIMPLE
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

//FUNCIÓN FLECHA
/*var numero_aleatorio=()=>{
    var n = Math.floor(Math.random ()*100+1);
    return n
}
var a= numero_aleatorio()
console.log(a)
var b = numero_aleatorio()
console.log(b)
var c = numero_aleatorio()
console.log(c)

var resultado=(a,b,c)=> {
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

//3. Pedir un numero entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el numero exceda los limites emita un mensaje y finalice el programa.

//FUNCIÓN SIMPLE
/*function numero_aleatorio(){
    var n = Math.trunc(Math.random ()*(9999-1)+1);
    return n
}
var a= numero_aleatorio()

function numero_cifra(a) {
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
}

numero_cifra(a);*/

//FUNCIÓN FLECHA
/*var numero_aleatorio=()=>
 n = Math.trunc(Math.random ()*(9999-1)+1);

var a= numero_aleatorio()

var numero_cifra= a => {
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
}

numero_cifra(a);*/

//4. Pedir una nota de 0 a 10 y mostrarla de forma:Insuficiente, Suciente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores.

//FUNCIÓN SIMPLE
/*function numero_aleatorio(){
    return n = Math.trunc(Math.random ()*(10-1)+1);
}
var a= numero_aleatorio()

function nota(a){
switch (n) {
    case 10:
    case 9:
        calificacion = "SUPERIOR";
        break;
    case 8:
    case 7:
        calificacion = "BIEN";
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

    return calificacion
}

console.log(`Nota ingresada ${a}`)
console.log(`Ha optenido una calificación ${nota(a)}`)*/

//FUNCIÓN FLECHA
/*var numero_aleatorio=()=>
 n = Math.trunc(Math.random ()*(10-1)+1);

var a= numero_aleatorio()

var nota=a=>{
switch (n) {
    case 10:
    case 9:
        calificacion = "SUPERIOR";
        break;
    case 8:
    case 7:
        calificacion = "BIEN";
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
    return calificacion
}

console.log(`Nota ingresada ${a}`)
console.log(`Ha optenido una calificación ${nota(a)}`)*/

//5. En un juego de preguntas a las que se responde "Sí" o "No" gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
//1. Colon descubrio America?
//2. La independencia de Colombia fue en el año 1810?
//3. The Doors fue un grupo de rock Americano?

//FUNCIÓN SIMPLE
/*console.log('¿Colón descubrio América?')
var a = 'Si'
console.log(a)

function ask(a) {
    if (a =='Si'){
        console.log('¿La independencia de Colombia fue en el año 1810?')
        var b = 'No'
        console.log(b)
      
        if (b =='Si'){
          console.log('¿The Doors fue un grupo de rock Americano?')
          var c = 'Si'
          console.log(c)
          if (c =='Si'){
            console.log('Has contestado asertivamente todas las preguntas. ¡Gracias por jugar!')
          }else{
            console.log('El juego a terminado. ¡Gracias por participar!')
          }
        }else{
          console.log('El juego a terminado. ¡Gracias por participar!')
        }
      }else{
        console.log('El juego a terminado. ¡Gracias por participar!')
      }
}

ask(a)*/

//FUNCIÓN FLECHA
/*console.log('¿Colón descubrio América?')
var a = 'Si'
console.log(a)

var pregunta=a=>{
    if (a =='Si'){
        console.log('¿La independencia de Colombia fue en el año 1810?')
        var b = 'No'
        console.log(b)
      
        if (b =='Si'){
          console.log('¿The Doors fue un grupo de rock Americano?')
          var c = 'Si'
          console.log(c)
          if (c =='Si'){
            console.log('Has contestado asertivamente todas las preguntas. ¡Gracias por jugar!')
          }else{
            console.log('El juego a terminado. ¡Gracias por participar!')
          }
        }else{
          console.log('El juego a terminado. ¡Gracias por participar!')
        }
      }else{
        console.log('El juego a terminado. ¡Gracias por participar!')
      }
}

pregunta(a)*/

//Ciclos

//1. Determinar los divisores de un número introducido por teclado

//FUNCIÓN SIMPLE
/*function numero_aleatorio() {
    return n =  Math.trunc(Math.random ()*100+1);
} 

var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

function divisores(num){
    for (let a = 0; a <= num; a++) {
        if (num%a==0) {
            console.log(`${a} es divisor de ${num}`)
        }
    }
}

divisores(num)*/

//FUNCIÓN FLECHA
/*var numero_aleatorio=()=>Math.floor(Math.random ()*100+1);

var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

var divisores=num=> {
    for (let a = 0; a <= num; a++) {
        if (num%a==0) {
            console.log(`${a} es divisor de ${num}`)
        }
    }
}

divisores(num)*/

//2. Determinar si un numero es o no es primo

//FUNCIÓN SIMPLE
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

//FUNCIÓN FLECHA
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

//3. Determinar si un número es o no es perfecto. Un numero es perfecto si la suma de sus divisores sin incluir el propio número es igual a este

//FUNCIÓN SIMPLE
/*function numero_aleatorio(){
    return n = Math.floor(Math.random ()*1000+1);
}
var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

function perfecto(num) {
    total = 0
    for (let a = 0; a<num; a++) {
        if (num%a==0) {
            total=total+a 
            console.log(a)
        }
    }

    if (total == num) {
        console.log(`el numero ${num} es perfecto `)
    }else{console.log(`el numero ${num} no es perfecto `)}
    
}

perfecto(num)*/

//FUNCIÓN FLECHA
/*var numero_aleatorio=()=>Math.floor(Math.random ()*(1000-1)+1);
var num = numero_aleatorio()
console.log(`${num} numero aleatorio`)

var perfecto=num=>{
    total = 0
    for (let a = 0; a<num; a++) {
        if (num%a==0) {
            total=total+a 
            console.log(a)
        }
    }

    if (total == num) {
        console.log(`el numero ${num} es perfecto `)
    }else{console.log(`el numero ${num} no es perfecto `)}
    
}

perfecto(num)*/

//6. Calcular el máximo de números positivos introducidos por teclado, sabiendo que metemos números hasta que introduzcamos uno negativo. El negativo no cuenta.

//FUNCIÓN SIMPLE
/*function numero_max() {
    numero=0
    maximo = 0 
    while (numero>=0) {
        numero = Math.trunc((Math.random()*100)-50)
        console.log(numero)
        if (numero>maximo) {
            maximo=numero
        }
    }
    console.log(`El numero mayor es ${maximo}`)  
}

numero_max()*/

//FUNCIÓN FLECHA
/*var numero_max=()=>{
    numero=0
    maximo = 0 
    while (numero>=0) {
        numero = Math.trunc((Math.random()*100)-50)
        console.log(numero)
        if (numero>maximo) {
            maximo=numero
        }
    }
    console.log(`El numero mayor es ${maximo}`)  
}

numero_max()*/

//7. Encontrar un número natural n más pequeño tal que la suma de los n primeros números naturales (1 + 2 + 3 + 4…..) exceda de una cantidad (máximo) introducida por el teclado. Es decir cuantos números de la serie de los naturales debo sumar para superar el dato máximo.

//FUNCIÓN SIMPLE
/*function numero_aleatorio(){
    return n = Math.trunc(Math.random ()*1000+1);
}
var num = numero_aleatorio()
console.log(`${num} numero`)

function n_natural(num) {
    suma=0
console.log(`Para superar el numero ${num} se debe sumar`)
n = 0 
while (suma<num) {
    n++
    suma+=n
    console.log(n)
    }
console.log(`El total seria ${suma}`)
}

n_natural(num)*/

//FUNCIÓN FLECHA
/*var numero_aleatorio=()=>Math.floor(Math.random ()*(1000-1)+1);

var num = numero_aleatorio()
console.log(`${num} numero`)

var n_natural=num=> {
    suma=0
    console.log(`Para superar el numero ${num} se debe sumar`)
    n = 0 
    while (suma<num) {
    n++
    suma+=n
    console.log(n)
    }
    console.log(`El total seria ${suma}`)
}

n_natural(num)*/

//9. Calcular la operación x n sin utilizar la función pow

//FUNCIÓN SIMPLE
/*function numero_aleatorio(){
    return n = Math.trunc(Math.random ()*10);
}

x = numero_aleatorio()
console.log(x)
n = numero_aleatorio()
console.log(n)

function potenciacion(x,n) {
    total=1
for (let a = 0; a <n; a++) {
    total=total*x
    
}
if (n==0) {
    total=1
}
console.log(`El resultado de ${x} a la ${n} es ${total}`)
}

potenciacion(x,n)*/

//FUNCIÓN FLECHA
/*var numero_aleatorio=()=>Math.trunc(Math.random ()*10);

x = numero_aleatorio()
console.log(x)
n = numero_aleatorio()
console.log(n)

var potenciacion=(x,n)=> {
    total=1
for (let a = 0; a <n; a++) {
    total=total*x
    
}
if (n==0) {
    total=1
}
console.log(`El resultado de ${x} a la ${n} es ${total}`)
}

potenciacion(x,n)*/

//Mediana

//FUNCIÓN SIMPLE
/*function vector() {
    let vector=[]
    let tam = Math.trunc(Math.random()*(20-10)+10)
    for (let i = 0; i < tam; i++) {
    vector[i]=Math.trunc(Math.random()*100);
    
    }   
return vector
}

array= vector()
array.sort((a,b)=>a-b)
console.log(array)

function tipo_array(array) {
    if(array.length%2==0){
        return 'El vector tiene una cantidad par'
    }else{
        return 'El vector tiene una cantidad impar'
    }
}
console.log(tipo_array(array))

function calcular_mediana(array) { 
    if(array.length%2==0){
        position1=array.length/2
        position2=position1-1
        element1=array[position1]
        element2=array[position2]
        mediana=(element1+element2)/2
    }else{
        position_c=(array.length-1)/2
        mediana=array[position_c]
    }
    return mediana
}

mediana = calcular_mediana(array)
console.log(`El tamaño del vector es ${array.length}`)
console.log(`La mediana del vector es ${mediana}`)*/

//FUNCIÓN FLECHA
/*var vector=()=>{
    let vector=[]
    let tam = Math.trunc(Math.random()*(20-10)+10)
    for (let i = 0; i < tam; i++) {
    vector[i]=Math.trunc(Math.random()*100);
    
    }   
return vector
}

array= vector()
array.sort((a,b)=>a-b)
console.log(array)

var tipo_array=array=>{
    if(array.length%2==0){
        return 'El vector tiene una cantidad par'
    }else{
        return 'El vector tiene una cantidad impar'
    }
}
console.log(tipo_array(array))

var calcular_mediana=array=>{ 
    if(array.length%2==0){
        position1=array.length/2
        position2=position1-1
        element1=array[position1]
        element2=array[position2]
        mediana=(element1+element2)/2
    }else{
        position_c=(array.length-1)/2
        mediana=array[position_c]
    }
    return mediana
}

mediana = calcular_mediana(array)
console.log(`El tamaño del vector es ${array.length}`)
console.log(`La mediana del vector es ${mediana}`)*/

//Moda

//FUNCIÓN SIMPLE
/*function vector(){
    vector=[]
    tam = Math.trunc(Math.random()*(25-1)+1)
    for (let i = 0; i < tam; i++) {
        vector[i]=Math.trunc(Math.random()*(100-1)+1)  
    }
    return vector
}

array=vector()
array.sort((a,b)=>a-b)
console.log(array)

function calcular_moda(array) {
    moda=[]
    for (let i = 0; i < array.length; i++) {
        for (let j = i+ 1; j < array.length; j++) {
            if(array[i]==array[j]){
            count = 0
            for (let k = 0; k < moda.length; k++) {
                if(moda[k]==array[i]){
                    count++
                }
            }
            if(count==0){
                moda.push(array[i])
            }
            }
        }
    }
    if(moda==0){
        return 'No hay moda'
    }
    return moda
}

console.log(`La moda es: ${calcular_moda(array)}`)*/


//FUNCIÓN FLECHA
/*var vector=()=>{
    vector=[]
    tam = Math.trunc(Math.random()*(25-1)+1)
    for (let i = 0; i < tam; i++) {
        vector[i]=Math.trunc(Math.random()*(100-1)+1)  
    }
    return vector
}

array=vector()
array.sort((a,b)=>a-b)
console.log(array)

var calcular_moda=array=>{
    moda=[]
    for (let i = 0; i < array.length; i++) {
        for (let j = i+ 1; j < array.length; j++) {
            if(array[i]==array[j]){
            count = 0
            for (let k = 0; k < moda.length; k++) {
                if(moda[k]==array[i]){
                    count++
                }
            }
            if(count==0){
                moda.push(array[i])
            }
            }
        }
    }
    if(moda==0){
        return 'No hay moda'
    }
    return moda
}

console.log(`La moda es: ${calcular_moda(array)}`)*/

//Desviacion estandar

//FUNCIÓN SIMPLE
/*function vector() {
    vector=[]
    tam = Math.trunc(Math.random()*(25-1)+1)
    for (let i = 0; i < tam; i++) {
       vector[i]=Math.trunc(Math.random()*(100+1)); 
    }
    return vector
}

array= vector()
array.sort((a,b)=>a-b)
console.log(array)

function media(array) {
    suma=0
    for (let i = 0; i < array.length; i++) {
        suma+=array[i];
    }
    media=suma/array.length
    return media
}
console.log(`La media es ${media(array)}`)

function desviacion(array){
    cantidad=0
    for (let j = 0; j < array.length; j++) {
        cantidad=cantidad+(Math.pow(array[j],2))
    }
    total=Math.sqrt((cantidad/array.length)-Math.pow(media,2))
    return total
}
console.log(`La desviacion estandar es ${desviacion(array)}`)*/

//FUNCIÓN FLECHA
/*var vector=()=>{
    vector=[]
    tam = Math.trunc(Math.random()*(25-1)+1)
    for (let i = 0; i < tam; i++) {
       vector[i]=Math.trunc(Math.random()*(100+1)); 
    }
    return vector
}

array= vector()
array.sort((a,b)=>a-b)
console.log(array)

var media=array=>{
    suma=0
    for (let i = 0; i < array.length; i++) {
        suma+=array[i];
    }
    media=suma/array.length
    return media
}
console.log(`La media es ${media(array)}`)

var desviacion=array=>{
    cantidad=0
    for (let j = 0; j < array.length; j++) {
        cantidad=cantidad+(Math.pow(array[j],2))
    }
    total=Math.sqrt((cantidad/array.length)-Math.pow(media,2))
    return total
}
console.log(`La desviacion estandar es ${desviacion(array)}`)*/

