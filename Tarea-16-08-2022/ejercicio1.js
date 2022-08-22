function temperaturaAleatoria(){
    var n = Math.floor(Math.random ()*100+1);
    return n
}

var valor = temperaturaAleatoria()

for (let i=1; i<=1; ++i){
    console.log(valor)
    console.log(`La temperatura en °C es ${valor}`);
}


function temperaturaF(valor){
    let temperatura=Math.trunc((valor/5)*9)+32;
    return temperatura
}

function temperaturaK(valor){
    let temperatura= Math.trunc(valor+273.15);
    return temperatura
}

function temperaturaR(valor){
    let temperatura= Math.trunc((9/5)*valor+491.67);
    return temperatura
}

let temperatura1 = temperaturaF(valor)
let temperatura2 = temperaturaK(valor)
let temperatura3 = temperaturaR(valor)

console.log(`La temperatura en °F(Fahrenheit) de ${valor}°C es ${temperatura1}°F`);
console.log(`La temperatura en °K(Kelvin) ${valor}°C es ${temperatura2}°K`);
console.log(`La temperatura en Rankine ${valor}°C es ${temperatura2} Rankine`)
