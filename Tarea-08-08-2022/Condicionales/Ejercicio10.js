//10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El programa debe responder que hora será un segundo después. Ej: ingreso 11:59:59, el programa responde 12:00:00. 
  
var hh = 00
var mm = 00
var ss = 00

ss = ss+1

if(mm>59){
  mm = 0
}
if(hh>23){
  hh = 0
}
if(ss>59){
  ss = 0
  mm = mm+1
  if(mm>59){
    mm = 0
    hh = hh+1
    if(hh>23){
     hh = 0 
    }
  }
}console.log(`${hh} : ${mm} : ${ss}`)