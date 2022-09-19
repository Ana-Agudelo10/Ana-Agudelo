//PROMESAS
/*function base(){
    return new Promise((resolve,reject)=>{
        resolve();
        setTimeout(()=>{
            console.log('la linea de codigo dentro de la funcion promesa')
        },500);

    })
}

base()
.then(()=>{
    console.log('En el .then');
})
.then(auxiliar)
function auxiliar() {
    console.log('Funcion auxiliar')
}*/
//.finally(()=>{console.log('Fin del programa');})

function base(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve()
        setTimeout(()=>{
            console.log('la linea de codigo dentro de la funcion promesa')
        },500);
    }else{
        reject()
    }
    });
}

base()
.then(()=>{
    console.log('En el .then');
    return 700;
})
.then(()=>{
    console.log('En el then 2 recibo',dato)
})
.then(auxiliar)
.catch(error=>console.log('Se activo el reject'))

function auxiliar() {
    console.log('Funcion auxiliar')
}

//en los then crear funciones de operaciones
