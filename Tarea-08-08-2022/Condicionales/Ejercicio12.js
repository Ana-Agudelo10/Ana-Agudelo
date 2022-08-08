//12. Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la hora que será dentro de 1 segundo

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