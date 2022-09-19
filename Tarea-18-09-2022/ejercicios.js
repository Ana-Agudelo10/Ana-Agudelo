//Promesas
//Contador letras mayusculas y minusculas
string='SDAlkjlkjo12'
contador1=0
contador2=0
mayusculas='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
minusculas='abcdefghijklmñopqrstuvwxyz'
const letraMinuscula = new Promise((resolve, reject) =>{
    for (let i = 0; i < minusculas.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if(string[j]==minusculas[i]){
                contador2++
    
            }
        }
    }
    resolve(contador2)
    reject()
});

letraMinuscula
.then(res=>{
    setTimeout(() => {
    console.log(`Tiene ${res} letras Minusculas`)
    }, 1000);
})
.catch(error=>{
    console.log(`El valor no es valido ${error}`)
})

const letraMayuscula = new Promise((resolve, reject) =>{
    for (let i = 0; i < mayusculas.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if(string[j]==mayusculas[i]){
                contador1++
            }      
        }
    }
    resolve(contador1)
    reject()
});

letraMayuscula
.then(res=>{
    setTimeout(() => {
    console.log(`Tiene ${res} letras Minusculas`)
    }, 1000);
    return(string)
})
.then(()=>{
    setTimeout(() => {
        console.log(string)
    }, 2000);
    return string
})
.then(()=>{
    setTimeout(() => {
    console.log(string.toLowerCase())
    }, 3000);
    return string
})
.then(()=>{
    setTimeout(() => {
    console.log(string.toUpperCase())
    }, 4000);
})

.catch(error=>{
    console.log(`El valor no es valido ${error}`)
})
.finally(()=>{
    setTimeout(() => {
    console.log('El programa a finalizado')
    }, 6000);
})

//Arreglo
function llenarArreglo(vec) {
    return new Promise((resolve,reject)=>{
    for (let i = 0; i <10; i++) {
        vec[i]=Math.trunc(Math.random()*100);
    }
    resolve(vec)
    })
}

vector=[]
llenarArreglo(vector)
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(`No es posible llenar el vector ${error}`)
})

function sumarArreglo(vec) {
    return new Promise((resolve,reject)=>{
    suma=0
    for (let i = 0; i < vec.length; i++) {
        suma+=vec[i]
    }
    resolve(suma)
    })
}

sumarArreglo(vector)
.then(res=>{
    console.log(`La suma del vector es ${res}`)
})
.catch(error=>{
    console.log(`No es posible sumar el vector ${error}`)
})

function promedioArreglo(vec){
    return new Promise((resolve,reject)=>{
        suma=0
        for (let i = 0; i < vec.length; i++) {
            suma+=vec[i]; 
        }
        resolve(mediana=suma/vec.length)
    })
}

promedioArreglo(vector)
.then(res=>{
    console.log(`El promedio del vector es ${res}`)
})
.catch(error=>{
    console.log(`No es posible promediar el vector ${error}`)
})
.finally(()=>{
    console.log('El programa ha finalizado')
})

//Async y Await 
//Letras Mayusculas y Minusculas
contador1=0
contador2=0
mayusculas='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
minusculas='abcdefghijklmñopqrstuvwxyz'
async function letraMinuscula(string){
    try{    
        for (let i = 0; i < minusculas.length; i++) {
            for (let j = 0; j < string.length; j++) {
                if(string[j]==minusculas[i]){
                    contador2++
        
                }
            }
        }  
        console.log(`Tiene ${contador2} letras Minusculas`)
    }

    catch(error){
        console.log(`El valor no es valido ${error}`)
    }

}
letraMinuscula('SDAlkjlkjo12')

function letraMayuscula(string){
    try{
        for (let i = 0; i < mayusculas.length; i++) {
            for (let j = 0; j < string.length; j++) {
                if(string[j]==mayusculas[i]){
                    contador1++
                }      
            }
        }
        console.log(`Tiene ${contador1} letras Mayusculas`)
        setTimeout(() => {
        console.log(string)
    }, 2000);
        setTimeout(() => {
        console.log(string.toLowerCase())
    }, 3000);
        setTimeout(() => {
        console.log(string.toUpperCase())
    }, 4000);
    }
    catch(error){
        console.log(`El valor no es valido ${error}`)
    }
    finally{
        setTimeout(() => {
        console.log('El programa a finalizado')
        }, 6000);
    }
}

letraMayuscula('SDAlkjlkjo12')

//Vector
async function llenarArreglo(vec) {
    try{
        for (let i = 0; i <10; i++) {
        vec[i]=Math.trunc(Math.random()*100);
        }
        console.log(vec)
    }
    catch(error){
        console.log(`No es posible llenar el vector ${error}`)
    }
    
}

vector=[]
llenarArreglo(vector)

async function sumarArreglo(vec) {
    suma=0
    try{for (let i = 0; i < vec.length; i++) {
        suma+=vec[i]
    }
    console.log(`La suma del vector es ${suma}`)
    }
    catch(error){
        console.log(`No es posible sumar el vector ${error}`)
    }
    
}

sumarArreglo(vector)

function promedioArreglo(vec){
    suma=0
    try{for (let i = 0; i < vec.length; i++) {
        suma+=vec[i]; 
    }
    console.log(`El promedio del vector es ${mediana=suma/vec.length}`)
    }
    catch(error){
        console.log(`No es posible promediar el vector ${error}`)
    }
    finally{
        console.log('El programa ha finalizado')
    }    
}

promedioArreglo(vector)
