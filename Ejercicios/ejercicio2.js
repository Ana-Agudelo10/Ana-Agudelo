/*var temperaturaAleatoria = Math.floor(Math.random()*(Math.pow(10,2)));

for (let i=1; i<=2; ++i){
    resultado *= 10;
}
return resultado;

console.log(temperaturaAleatoria)*/

var temperaturaAleatoria = Math.floor(Math.random ()*100+1);
for (let i=1; i<=1; ++i)
  console.log(temperaturaAleatoria)
console.log('La temperatura en °C es '+ temperaturaAleatoria);

var temperaturaF = Math.trunc((temperaturaAleatoria/5)*9)+32;
console.log('La temperatura en °F(Fahrenheit) es '+ temperaturaF);

var temperaturaK = Math.trunc (temperaturaAleatoria+273.15);
console.log('La temperatura en °K(Kelvin) es '+ temperaturaK);

var temperaturaR = Math.trunc((9/5)*temperaturaAleatoria+491.67);
console.log('La temperatura en Rankine es '+ temperaturaR)


