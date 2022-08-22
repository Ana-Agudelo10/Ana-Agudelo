function numero_aleatorio(){
    var n = Math.floor(Math.random ()*100+1);
    return n
}
var a= numero_aleatorio()
console.log(a)
var b = numero_aleatorio()
console.log(b)
var c = numero_aleatorio()
console.log(c)

function valor_num(a,b,c) {
    for (let i=1; i<=1; ++i)
    return valor
}

function x1 (a, b, c){
    return (((-1)*b)-(Math.sqrt(Math.pow (b,2))+(4*a*c)))/(2*a);
  }
  var resultado_x1 = x1(a,b,c);
  
  /*if((Math.pow (b,2))+(4*a*c)<0){
    resultado_x1p= resultado_x1p+'i'
    resultado_x1n=resultado_x1n+'i'
  }*/
  console.log("x1 = " + resultado_x1);
  
  function x2 (a, b, c){
    return (((-1)*b)+(Math.sqrt(Math.pow (b,2))+(4*a*c)))/(2*a);
  }
  var resultado_x2 = x2(a,b,c);
  /*if((Math.pow (b,2))+(4*a*c)<0){
    resultado_x2p= resultado_x2p+'i'
    resultado_x2n=resultado_x2n+'i'
  }*/
  console.log("x2 = " + resultado_x2);