//8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo los cálculos así: Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que permita calcular el costo de una llamada dados los minutos de duración.

var t = 40
if(t<0){
  console.log('El valor no es valido')
}else if(t<=3){
  tx = t*200
  console.log(`El costo de la llamada es de:  ${tx}`)
}else{
  ta = (t-3)*50
  tb = 200
  ty = ta + tb
  console.log(`El costo de la llamada es de: ${ty}`)
}