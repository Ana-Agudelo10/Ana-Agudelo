//7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.manera:Si trabaja 40 horas o menos se le paga $2600 por hora. Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra

var h = 50

if(h<0){
  console.log('El valor no es valido')
}else if(h<=40){
  hx = h*2600
  console.log(`Su salario es de ${hx}`)
}else{
  ha = (h-40)*5000
  hb = 40*2600
  hy = ha + hb
  console.log(`Su salario es de ${hy}`)
}