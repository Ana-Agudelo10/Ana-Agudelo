//6. Pida un numero al usuario que representa dias del año. Diga a que mes del año corresponde así. Si el numero es menor o igual a 31 indica que esta en enero, pero si el numero por ejemplo es 32 indica que es el 1 de febrero. No tenga en cuenta si el año es bisiesto, es decir siempre febrero tiene 28 dias.

var n = Math.trunc(Math.random() *(365-1)+1);
var month = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']; 
console.log(n)
if (n<= 31){                        
  console.log(`El numero ingresado muestra el mes de `+month[0]+` dia ${n}`)
}else if (n<59){
  console.log(`El numero ingresado muestra el mes de `+month[1]+` dia ${n}`)
}else if (n<90){
  console.log(`El numero ingresado muestra el mes de `+month[2]+` dia ${n}`)
}else if (n<120){
  console.log(`El numero ingresado muestra el mes de `+month[3]+` dia ${n}`)
}else if (n<151){
  console.log(`El numero ingresado muestra el mes de `+month[4]+` dia ${n}`)
}else if (n<181){
  console.log(`El numero ingresado muestra el mes de `+month[5]+` dia ${n}`)
}else if (n<212){
  console.log(`El numero ingresado muestra el mes de `+month[6]+` dia ${n}`)
}else if (n<243){
  console.log(`El numero ingresado muestra el mes de `+month[7]+` dia ${n}`)
}else if (n<270){
  console.log(`El numero ingresado muestra el mes de `+month[8]+` dia ${n}`)
}else if (n<304){
  console.log(`El numero ingresado muestra el mes de `+month[9]+` dia ${n}`)
}else if (n<334){
  console.log(`El numero ingresado muestra el mes de `+month[10]+` dia ${n}`)
}else if (n<=365){
  console.log(`El numero ingresado muestra el mes de `+month[11]+` dia ${n}`)
}else{
  console.log('Numero no valido')
}