var a = Math.floor(Math.random ()*100+1);
for (let i=1; i<=1; ++i)
  console.log(a)

var b = Math.floor(Math.random ()*100+1);
for (let i=1; i<=1; ++i)
    console.log(b)

var c = Math.floor(Math.random ()*100+1);
for (let i=1; i<=1; ++i)
    console.log(c)

    /*var a = prompt("Ingresa un valor numerico (a)");
    var b = prompt("Ingresa un valor numerico (b)");
    var c = prompt("Ingresa un valor numerico (c)"); */
    
    function x1 (a, b, c){
      return (((-1)*b)-(Math.sqrt(Math.pow (b,2))+(4*a*c)))/(2*a);
    }
    var resultado_x1 = x1(a,b,c);
    console.log("x1 = " + resultado_x1);
    
    function x2 (a, b, c){
      return (((-1)*b)+(Math.sqrt(Math.pow (b,2))+(4*a*c)))/(2*a);
    }
    var resultado_x2 = x2(a,b,c);
    console.log("x2 = " + resultado_x2);