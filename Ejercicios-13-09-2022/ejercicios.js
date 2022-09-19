//SETTIMEOUT

//Ejemplo1
function externa(){
console.log('Funcion externa al setTimeout')
}
setTimeout(externa,5000);

//Ejemplo2
const funcionExt=()=>{
    console.log('Funcion externa flecha')
}
setTimeout(funcionExt,6000);

//Ejemplo3
setTimeout(()=>{
    console.log('Yo amo Soacha')
},2000);

//Ejemplo4
setTimeout(function() {
    console.log('Funcion Clásica')
}, 3000)

//SETINTERVAL
//Ejemplo1
setInterval(() => {
    console.log('Se repite')
}, 3000);

//Ejemplo2
const timerId = setInterval(() => console.log('Amo el SENA'), 2000);

//Despues de 5 segundos parar
setTimeout(() => {
    clearInterval(timerId)
    console.log('Ha finalizado')
}, 7000);

//Ejemplo3
function externa1(){
    console.log('Funcion externa al setInterval')
    }
setInterval(externa1,3000)

//Escriba un programa que muestre un contador de 1 hasta 10 donde cada numero se muestre cada 2 segundos
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 2000*i);
    }

contador=0
let prog = setInterval(()=>{
for (var i = 1; i <= 10; i++) {
    contador++
    console.log(contador)
    }
},2000)

//CALLBACK
function receptora(cb1,callback,parametro){
    cb1();
    setTimeout(()=>{
        console.log('Dentro de la funcion receptora')
    }, 0);
    callback(parametro)
}

function funcionArgumento(parametro){
    console.log(`${parametro} del la funcion argumento`);
}
receptora(()=>console.log('Función anónima'),funcionArgumento,100);
//o
receptora(funcionArgumento,100);

//Funcion llenar arreglo

function trabajoArreglos(cb1,cb2) {
    let vec1=[]
    setTimeout(()=>{
        console.log(vec1)
    }, 2000);
    vec1=cb1(vec1);
    console.log(cb2(vec1));
}

function llenarArreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i]=Math.trunc(Math.random()*1000);
    }
    return vec
}

function sumarArreglo(vec) {
    suma=0
    for (let i = 0; i < vec.length; i++) {
        suma=+vec[i]
    }
    return suma
}

trabajoArreglos(llenarArreglo,sumarArreglo)

/*Funcion general. Tiene dos callback. Uno que cuenta letras mayusculas de un string y otro que cuenta minusculas. La cadena de text se debe ingresar como parametro a la misma funcion general.
La funcion general imprime la cadena de texto en minuscula y en mayuscula. Tenga cuidado de no perder la conformacion original de la cadena.*/

//string='AUMLopukI'
//console.log(string.toLowerCase())
contador1=0
contador2=0
mayusculas='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
minusculas='abcdefghijklmñopqrstuvwxyz'

function general(cb1,cb2,string) {
    cb1(string)
    cb2(string)
    cb1=string.toLowerCase()
    cb2=string.toUpperCase()

    setTimeout(() => {
        console.log(cb1)
    }, 3000);
    setTimeout(() => {
        console.log(cb2)
    }, 5000);
    setTimeout(() => {
        console.log(string)
    }, 7000);
    
}
function letrasMayusculas(string) {
    for (let i = 0; i < mayusculas.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if(string[j]==mayusculas[i]){
                contador1++
            }
            
        }
        
    }
    console.log(`Tiene ${contador1} letras Mayusculas`) 
}

//letrasMayusculas('AUMLopukI')

function letrasMinuscula(string) {
    for (let i = 0; i < minusculas.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if(string[j]==minusculas[i]){
                contador2++
            }
            
        }
        
    }
    console.log(`Tiene ${contador2} letras Minusculas`) 
}
//letrasMinuscula('AUMLopukI')

general(letrasMayusculas,letrasMinuscula,'AUMLopPÑk')