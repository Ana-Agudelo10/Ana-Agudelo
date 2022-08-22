let vector1=[]
let tam1 = Math.trunc(Math.random()*(20-5)+5)
console.log(`El valor de la variable tam es ${tam1}`)
for (let i = 0; i < tam1; i++) {
    vector1[i]=Math.trunc(Math.random()*100); 
}
console.log(vector1);


let vector2=[]
let tam2 = Math.trunc(Math.random()*(20-5)+5)
console.log(`El valor de la variable tam es ${tam2}`)
for (let i = 0; i < tam2; i++) {
    vector2[i]=Math.trunc(Math.random()*100); 
}
console.log(vector2);

let vector3=[]
let tam3 = Math.trunc(Math.random()*(20-5)+5)
console.log(`El valor de la variable tam es ${tam3}`)
for (let i = 0; i < tam3; i++) {
    vector3[i]=Math.trunc(Math.random()*100); 
}
console.log(vector3);

par=0
impar=0

if(tam1>tam2){
    if(tam1>tam3){
        console.log(`El vector 1 es mayor ${tam1}`)
        for (let i = 0; i < vector1.length; i++) {
            if(vector1[i]%2==0){
                console.log(`${vector1[i]} es par`)
                par+=1
            } else{
                console.log(`${vector1[i]} es impar`)
                impar+=1    
            }
            
        }console.log(`La cantidad de pares es ${par}`)
        console.log(`La cantidad de impares es ${impar}`)
    }else if(tam3>tam2){
        console.log(`El vector 3 es mayor ${tam3}`)
        for (let i = 0; i < vector3.length; i++) {
            if(vector3[i]%2==0){
                console.log(`${vector3[i]} es par`)
                par+=1
            } else{
                console.log(`${vector3[i]} es impar`)
                impar+=1 
            }
            
        }console.log(`La cantidad de pares es ${par}`)
        console.log(`La cantidad de impares es ${impar}`)
    }
}else if(tam2>tam3){
    console.log(`El vector 2 es mayor ${tam2}`)
    for (let i = 0; i < vector2.length; i++) {
        if(vector2[i]%2==0){
            console.log(`${vector2[i]} es par`)
            par+=1
        } else{
            console.log(`${vector2[i]} es impar`)
            impar+=1 
        }console.log(`La cantidad de pares es ${par}`)
        console.log(`La cantidad de impares es ${impar}`)
        
    }
}

while (vector1>vector2) {
    vector1[vector1.length]=vector2[vector1.length]
}
while (vector1>vector3) {
    vector1[vector1.length]=vector3[vector1.length]
}
while (vector2>vector1) {
    vector2[vector2.length]=vector1[vector2.length]
}
while (vector2>vector3) {
    vector2[vector2.length]=vector3[vector2.length]
}
while (vector3>vector1) {
    vector3[vector3.length]=vector1[vector3.length]
}
while (vector3>vector2) {
    vector3[vector3.length]=vector2[vector3.length]
}

console.log(vector1)
console.log(vector2)
console.log(vector3)