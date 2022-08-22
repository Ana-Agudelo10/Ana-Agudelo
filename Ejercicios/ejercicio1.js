/*function aleatorio(min, max){
    return Math.floor(Math.random () * (max-min) + min);
}

for (let i = 1; i <= 1; ++i){
    console.log(aleatorio(1,20))
}*/

var numeroaleatorio = Math.trunc(Math.random ()*100);

for (let i=1; i<=1; ++i)
console.log(numeroaleatorio)
console.log('El rango corresponde desde 1 hasta ' + numeroaleatorio)

function aleatorio(min, numeroaleatorio){
    return Math.trunc(Math.random () * (numeroaleatorio-min) + min);
}

for (let i = 1; i <= 1; ++i){
    console.log(aleatorio(1,numeroaleatorio))
    console.log('El numero aleatorio dentro del rango es ' + numeroaleatorio)
}