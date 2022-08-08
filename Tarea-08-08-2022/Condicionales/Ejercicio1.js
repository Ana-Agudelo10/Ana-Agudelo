//1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
//valor del medio es 11. No use operadores lógicos
var a = Math.trunc(Math.random() * 100);
console.log(a)
var b = Math.trunc(Math.random() * 100);
console.log(b)
var c = Math.trunc(Math.random() * 100);
console.log(c)

if (a > b) { 
  if(c > a){
    console.log(`El valor del medio es ${a}`)
  }else if(c > b){
      console.log(`El valor del medio es ${c}`)
    }else if(b > a){
      if(c > b){
        console.log(`El valor del medio es ${b}`)
      }
    }else if(b > c){
      console.log(`El valor del medio es ${b}`)
    }
}else if(b > a){          
  if(c > b){
    console.log(`El valor del medio es ${b}`)
  }else if(c > a){
    if(b > c){
    console.log(`El valor del medio es ${c}`)
    }
  }else if(b > a){
    console.log(`El valor del medio es ${a}`)
  }
}