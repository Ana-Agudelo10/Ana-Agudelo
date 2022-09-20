function saySometing(x){
    return new Promise(function promesa(resolve)/*parametro*/{
        setTimeout(() => {
          resolve("something "+x)  
        }, 2000);
    });
}

async function talk(x){
    const words = await saySometing(x);
    console.log(words);
}

talk(2);
talk('Hola')
talk('4')

contador=0
function valorContable(val) {
    return new Promise((resolve,reject)=>{
        //if(typeof(x)=='int'){
            setTimeout(() => {
                    contador++ 
                    resolve(`x value ${val} counter: ${contador}`)
            }, 1000);
            
        /*}else{
            reject('El valor no es valido')
        }*/
    });   
}

async function return1(val) {
    //try{
        console.log(`ready ${val} counter: ${contador}`)  
        const number= await valorContable(val);
        console.log(number) 
            
    //}
    /*catch(error){
        console.log('No es posible imprimir',error)
    }*/
}
for (let i = 1; i <=10; i++) {
    return1(i);
}