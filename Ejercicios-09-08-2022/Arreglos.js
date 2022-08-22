let vector=[]
let tam = Math.trunc(Math.random()*(20-10)+10)
console.log(`El valor de la variable tam es ${tam}`)

for (let i = 0; i < tam; i++) {
    vector[i]=Math.trunc(Math.random()*100);
    
}
console.log(vector);
console.log(`El tamaño del vector es ${vector.length}`)
//La media
let suma=0
for (let j = 0; j < vector.length; j++) {
    suma=vector[j]+suma; 
    media=suma/tam
}
console.log(`La media es ${media}`)
//La media
let mediana=0
for (let j = 0; j < tam; j++) {
    vector = vector.sort((x,y)=>x-y);
    
    //mitad=Math.trunc(vector/2)
    /*if(tam%2==1){
        vector[mitad]=(vector[mitad-1]+vector[mitad+2])/2
    }*/
}

if(vector.length%2==1){
    mediana=vector[((vector.length/2)-1)]//+((vector.length/2)-1)/2]
}else{
    mediana = vector[(Math.trunc(vector.length/2))]
}
console.log(`El orden del vector es ${vector}`)
console.log(`La mediana es ${mediana}`)

//La distancia estandar 

