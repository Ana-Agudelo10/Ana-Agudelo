//14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga además en que vuelta está sabiendo que cada 360 grados se completa una vuelta a la circunferencia. Además diga el resultado en radianes.

var n = 270
var vuelta = 360

posicion = Math.trunc(n/vuelta)
angulo = n-(vuelta*posicion)

if(angulo>0 && angulo<=90){
  cuadrante = `Esta en el cuadrante 1` 
}else if(angulo>90 && angulo<=180){
  cuadrante = `Esta en el cuadrante 2` 
}else if(angulo>180 && angulo<=270){
  cuadrante = `Esta en el cuadrante 3` 
}else if(angulo>270 && angulo<=360){
  cuadrante = `Esta en el cuadrante 4` 
}else{
  cuadrante = `No pertene a ningun cuadrante`
}
pi = 3.1416
radaprox = Math.round((n*pi)/180)
rad = (n*pi)/180
if(posicion>1){
  an= `Vueltas`
}else{
  an= `Vuelta` 
}
console.log(`El Angulo ${n}° ${cuadrante} y a dado ${posicion} ${an}.El angulo ${n}°   Equivale a  ${rad} rad  que es aproximadamente ${radaprox} rad `)