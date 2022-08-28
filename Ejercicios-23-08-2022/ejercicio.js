/*var x = 10
x%2==0 ? console.log('par'):console.log('impar')
// condicion?valor si verdadero:valor si falso

if(x%2==0){
    console.log('par')
}else{
    console.log('impar')
}*/

/*function primo(num){
    var cont=0
    for (let i = 1; i < num; i++) {
        num%i==0?cont++:cont=cont   
    }
    cont>2? console.log('No es primo'):console.log('Es primo')
    /*if(cont>2){
        return'No es primo'
    }else{
        return 'Es primo'
    }
}
primo(101)*/

//Escriba una funcion que lea una cadena de texto y diga cuantas vocales tiene, cuantas consonantes y cuantos caracteres diferentes a consonantes y vocales
/*array=['a', 'b', 'c','5','!']
//toLowerCase(array)
console.log(array)

function vocales(array){
     
    letra=[0,0,0]
    vocales=['a','e','i','o','u']
    consonantes=['b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z']
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            //if(array[i]==a || array[i]==e || array[i]==i || array[i]==o || array[i]==u)
            if(array[j]==vocales[i]){
                letra[0]++
            }
        } 
        for (let k = 0; k < array.length; k++) {
            if(array[j]==consonates[k]){
                letra[1]++
            }
        } 
        letra[2]=(array.length)-(letra[0]+letra[1])
    }
    return letra
}
console.log(vocales(array))*/

//OBJETOS LITERALES

/*const x=[]
var persona={
    nombre:'Pedro Perez',
    id:12345,
    datosCompletos:()=>console.log('${persona.nombre} ${persona.id}')
}

console.log(persona.nombre);
console.log(persona['id']);
persona.datosCompletos()

persona.direccion='Calle con Kra';
console.log(persona)

persona.nombre='Juan Mora';
console.log(persona.nombre)

delete persona.nombre;
console.log(persona)*/

//Generar 4 objetos para una figura geometrica y funciones dentro del objeto para calcular area y perimetro

/*var triangulo_equilatero={
    nombre:'Triangulo',
    base:4,
    altura:8,
    area:()=> console.log(`El area del triangulo es ${triangulo_equilatero.base*triangulo_equilatero.altura/2}`),
    perimetro:()=>console.log(`El perimetro del triangulo es ${triangulo_equilatero.base*3}`)
}

var cuadrado={
    nombre:'Cuadrado',
    lado:4,
    perimetro:()=>console.log(`El perimetro del cuadrado es ${cuadrado.lado*4}`),
    area:()=>console.log(`El area del cuadrado es ${cuadrado.lado*cuadrado.lado}`)
}

var circulo={
    nombre:'Circulo',
    radio:23,
    perimetro:()=>console.log(`El perimetro del circulo es ${(2*3.14159265)*circulo.radio}`),
    area:()=>console.log(`El area del circulo es ${3.14159265*(Math.pow(circulo.radio,2))}`)
}

var rectangulo={
    nombre:'Rectangulo',
    base:45,
    altura:43,
    perimetro:()=>console.log(`El perimetro del rectangulo es ${rectangulo.base+rectangulo.altura+rectangulo.base+rectangulo.altura}`),
    area:()=>console.log(`El area del rectangulo es ${rectangulo.base*rectangulo.altura}`)

}

console.log(rectangulo)
rectangulo.perimetro()
rectangulo.area()

console.log(triangulo_equilatero)
triangulo_equilatero.perimetro()
triangulo_equilatero.area()

console.log(circulo)
circulo.perimetro()
circulo.area()

console.log(cuadrado)
cuadrado.perimetro()
cuadrado.area()*/

//Funcion que reciba como parametro un objeto y decir si es circulo

/*function decidir(objeto) {
    if(objeto.radio != undefined){
        console.log('Tiene circunferencia')
    }else{
        console.log('No tiene circunferencias')
    } 
}

decidir(figuras)*/
/*function figura(object) {
        if(object= object.radio){
            console.log('Tiene circunferencia') 
        }else {
            console.log('No tiene circunferencia')
    }
    
}
figura(cuadrado)*/