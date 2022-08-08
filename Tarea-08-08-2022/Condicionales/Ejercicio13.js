//13. Solicite al usuario una cantidad numérica que expresa segundos (medida de tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso

var n = 12500

if(n>=0){ 
ss = n%60
console.log(ss)
mm1 = Math.trunc(n/60)
console.log(mm1)
mm = mm1%60
console.log(mm)
hh = Math.trunc(mm1/60)
console.log(hh)
console.log(`${hh} : ${mm} : ${ss}`)
}else{
  console.log(`El numero no puede representar una medida de tiempo`)
}