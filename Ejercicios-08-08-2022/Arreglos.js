/*let vector1 = [ ];
vector1[0]=100;
vector1[1]=50;
vector1[2]='sena';
vector1[4]=300;
console.log(vector1)*/

//Otra forma de crear arreglos
/*let vec = new Array();
vec[0]='YO';
vec[1]='AMO';
vec[2]='PROGRAMAR';
vec[3]=[0,1,2]
console.log(vec)*/

/*for (let i = 0; i < 20; i++) {
    vector[i]=Math.trunc(Math.random()*100); 
}
console.log(vector);*/

/*let vector=[];
let tam=Math.trunc((Math.random()*20-10)+10);
console.log(`Valor de la variable tam ${tam}`)

for (let i = 0; i < tam; i++) {
    vector[i]=Math.trunc(Math.random()*100); 
}
console.log(vector);
console.log(`Tamaño del vector ${vector.length}`);

for (let i = 0; i < vector.length; i++) {
    if(vector[i]%2==0){
        console.log(`${vector[i]} es par`)
    } else{
        console.log(`${vector[i]} es impar`)
    }
    
}

let cuadrados=[]
for (let i = 0; i < vector.length; i++) {
    cuadrados[i]=Math.pow(vector[i],2)
    
}
console.log(`Cuadrados ${cuadrados}`);

let raiz_cuadrada=[]
for (let i = 0; i < vector.length; i++) {
    raiz_cuadrada[i]=Math.sqrt(vector[i],2)
    
}
console.log(`Raices ${raiz_cuadrada}`);*/

//Operaciones para desarrollar con arreglos
/*1. Sumar todos los elementos de un arreglo
2.Promediar los elementos de un arreglo
3. Obtener el numero mayor de los elementos de un arreglo
4. Obtener el numero menor de los elementos de un arreglo
5. Buscar un elemento dentro de un arreglo
6. Ordenar un arreglo de menor a mayor (algoritmo de la burbuja)
7. Ordenar un arreglo de mayor a menor (algoritmo de la burbuja)*/

let vector=[];
let tam=Math.trunc((Math.random()*20-10)+10);
console.log(`Valor de la variable tam ${tam}`)
for (let i = 0; i < tam; i++) {
    vector[i]=Math.trunc(Math.random()*100); 
}
console.log(vector);
//1. Sumar todos los elementos de un arreglo
/*
let suma=0
for (let i = 0; i < vector.length; i++) {
    suma=suma+vector[i]
}
console.log(`Suma ${suma}`);*/

//2.Promediar los elementos de un arreglo
/*let suma=0
for (let i = 0; i < vector.length; i++) {
    suma=suma+vector[i]
    media=suma/vector.length
}
console.log(`Suma ${suma}`);
console.log(`Promedio ${media}`);*/

//3. Obtener el numero mayor de los elementos de un arreglo
/*let mayor=0
for (let i = 0; i < vector.length; i++) {
    if(vector[i]>mayor){
        mayor=vector[i];
    }
}
console.log(`Mayor ${mayor}`)*/

//4. Obtener el numero menor de los elementos de un arreglo
/*let menor=vector[0]
for (let i = 0; i < vector.length; i++) {
    if(vector[i]<menor){
        menor=vector[i];
    }
}
console.log(`Menor ${menor}`)*/
//5. Buscar un elemento dentro de un arreglo

/*element=18
for (let i = 0; i <= vector.length; i++) {
    if(vector[i]==element){
        console.log(`El elemento ${element} se encuentra dentro del vector en la posicion ${i+1}`)    
    }
         
}
console.log(`El elemento ${element} no se encuentra dentro del vector `)*/

//6. Ordenar un arreglo de menor a mayor (algoritmo de la burbuja)
/*for (let i = 0; i < vector.length; i++) {
    for (let j = 0; j < vector.length - i; j++) {
        if(vector[j]>vector[j+1]){
            [vector[j], vector[j+1]]=[vector[j+1],vector[j]]
        } 
    }
    
}
console.log(vector)*/

//7. Ordenar un arreglo de mayor a menor (algoritmo de la burbuja)
/*for (let i = 0; i < vector.length; i++) {
    for (let j = 0; j < vector.length - i; j++) {
        if(vector[j]>vector[j-1]){
            [vector[j], vector[j-1]]=[vector[j-1],vector[j]]
        } 
    }
    
}
console.log(vector)*/

