//Generar un numero alatorio entre 1000 y 10000
//Con poblacion calculo en 20 años con calculo exponencial
//0.3
//Numero aleatorio de nacimientos entre el 10% de la poblacion 
//Numero aleatorio de muertes entre el 3% de la poblacion
//dos promesas con el ejercicio 

// calculo_exponencial=poblacion*(1+0.3)**20
// console.log(calculo_exponencial)

poblacion=Math.trunc(Math.random()*(9000+1)+1000)
console.log(poblacion)
for (let i = 1; i <=20; i++) {
    nacimientos=Math.trunc(Math.random()*(poblacion*0.10))
    muertes=Math.trunc(Math.random()*(poblacion*0.03))   
    r=(nacimientos-muertes)/poblacion
    calculo_exponencial=poblacion*(1+r)**i
    console.log(`Año: ${i}`)
    console.log(`Nacimientos: ${nacimientos}`)
    console.log(`Muertes: ${muertes}`)
    console.log(`Calculo exponencial: ${r}`)
    console.log(`Poblacion: ${calculo_exponencial}`) 
}

//1. promesa: Al 10% de la poblacion final entregar casa: calcular la cantidad de personas que se le dara una casa dentro de settmeout imprimir 5 sec despues de lo anterios
//async
function casaPoblacion() {
    calculo=0
    return new Promise((resolve)=>{
        calculo=calculo_exponencial*0.10
        setTimeout(() => {
            resolve(calculo)    
        }, 5000); 
    })
}

function crecimientoNeto(){
    return new Promise((resolve)=>{
        crecimientoNetoP=(calculo_exponencial/poblacion)*100
        setTimeout(() => {
            resolve(crecimientoNetoP)    
        }, 10000);
    })
}

async function outfunction() {
    const c1= await casaPoblacion()
    console.log(`10% de la poblacion final con casa: ${c1}`)
    const c2= await crecimientoNeto()
    console.log(`Crecimiento Neto: ${c2}`)
}
outfunction()

//Promesas
const casaPoblacion= new Promise((resolve)=>{
    calculo=calculo_exponencial*0.10
    setTimeout(() => {
        resolve(calculo)    
    }, 5000);

})
casaPoblacion
.then(res=>{
    console.log(`La cantidad de personas que se le dara una casa es de ${res}`)
})
.catch(error=>{
    console.log(`Ocurrio un error ${error}`)
})

//2. Promesa calcular el crecimiento neto de la poblacion final
const crecimientoNeto= new Promise((resolve)=>{
    crecimientoNetoP=(calculo_exponencial/poblacion)*100
    setTimeout(() => {
        resolve(crecimientoNetoP)    
    }, 10000);

})
crecimientoNeto
.then(res1=>{
    console.log(`El crecimiento neto de la poblacion final es: ${res1}`)
})
.catch(error=>{
    console.log(`Ocurrio un error ${error}`)
})
.finally(()=>{
    console.log(`El programa a finalizado`)
})