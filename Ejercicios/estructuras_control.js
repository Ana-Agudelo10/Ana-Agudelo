/*var valor = Math.trunc(Math.random()*100000);
    console.log(valor);
var estrato = Math.trunc(Math.random()*6+1);
    console.log(estrato);

switch (estrato){
    case 1:
        descuento= valor*0.50;
        console.log(descuento+' 50%');
        break;

    case 2:
        descuento= valor*0.40;
        console.log(descuento+' 40%');
        break;

    case 3:
        descuento= valor*0.30;
        console.log(descuento+' 30%');
        break;

    case 4:
        descuento= valor*0.20;
        console.log(descuento+' 20%');
        break;

    case 5:
        descuento= valor*0.10;
        console.log(descuento+' 10%');
        break;

    case 6:
        descuento= valor*0.5;
        console.log(descuento+' 5%');
        break;
        
     default:
        console.log('El estrato no es correcto');
        break;   
}*/
/*let suma = 0
for (i = 1; i<= 10; i=i+1){
    console.log(i)
    suma=suma+i;
    console.log(suma+'suma es')
}*/
/*var max=100;
var min=50;
for (let j = 0; j < 10; j++) {
    console.log(Math.random()*(max-min)+min);
    
}*/

/*for (let i = 0; i < 100; i++) {
    console.log(i)
    if (i%7 == 0){
    console.log(i+' Es multiplo de 7') }  
}*/
var suma=0
var min=1
var max = 100
for (let i = 0; i < 10; i++) {
    var v = Math.trunc(Math.random()*(max-min)+min);
    console.log(v)
    suma=suma+v;
    promedio=suma/10  
}
console.log('La suma es '+suma)
console.log('El promedio es '+promedio)