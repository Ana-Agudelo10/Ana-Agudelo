//15. Diseñar e implementar un programa que solicite a su usuario un valor no negativo n y visualice la siguiente salida:
//1 2 3 ........ n-1 n
//1 2 3 ........ n-1
//.........
//1 2 3
//1 2
//1
var n = Math.trunc(Math.random() * 100);

x = "";
for(let i = n; i>0; i--){
    
    for (let j = 1; j < i; j++) {
        x = x + j.toString();
        
    }
    x = x + "\n"
}
console.log(x)