
/*function vector(){
    vector=[]
    tam=Math.trunc(Math.random()*30)
    for (let i = 0; i < tam; i++) {
        vector[i]=Math.trunc(Math.random()*100)
    }
    return vector
}

array=vector()
array.sort((a,b)=>a-b)
console.log(array)

function calcularsuma(array){
    suma=0
    for (let i = 0; i < array.length; i++) {
        suma+=array[i];
    }
    return suma
}

console.log(`La suma es ${calcularsuma(array)}`)

function promedio(array) {
    suma=0
    for (let i = 0; i < array.length; i++) {
        suma+=array[i]; 
        promedio=suma/array.length
    }
    return promedio
}
console.log(`El promedio es ${promedio(array)}`)

function menor(array){
    return minimo=Math.min.apply(null,array)
}

console.log(`El numero menor es ${menor(array)}`)

function mayor(array){
    return maximo=Math.max.apply(null,array)
}

console.log(`El numero mayor es ${mayor(array)}`)*/

//Escriba metodos para:
//suma, promedio, mayor, menor
//Escriba una clase que represente un producto comercial de cualoquier area. Debe tener constructor, setter, getters y un metodo para calcular el valor despues de IVA.
//Leer Classes 149-161

//1.
/*class Numeros{
    constructor(vector){
        this._vector=vector;
    }
    
    llenarVector(tam){
        for (let i = 0; i < tam; i++) {
           this._vector[i]=Math.round(Math.random()*100)
            
        }
    }

    get vector(){
        return this._vector;
    }

    calcularsuma(vector){
        this.suma=0
        for (let i = 0; i < vector.length; i++) {
            this.suma+=vector[i];
        }
    }

    promedio(vector) {
        this.promedio=0
        for (let i = 0; i < vector.length; i++) {
            this.suma+=vector[i]; 
            this.promedio=this.suma/vector.length
        }
    }

    menor(vector){
        this.minimo=Math.min.apply(null,vector)
    }
    
    mayor(vector){
        this.maximo=Math.max.apply(null,vector)
    }
    
    ordenar(vector){
        vector.sort((a,b)=>a-b)
    }
}

let vec=[]
let ob=new Numeros(vec);
ob.llenarVector(10);
console.log(ob.vector);

ordenar=ob.vector
ordenar.sort((a,b)=>a-b)
console.log(ordenar)

ob.calcularsuma(vec)
console.log(`La suma es ${ob.suma}`)

ob.promedio(vec)
console.log(`El promedio es ${ob.promedio}`)

ob.menor(vec)
console.log(`El numero menor es ${ob.minimo}`)

ob.mayor(vec)
console.log(`El numero mayor es ${ob.maximo}`)*/

//2

class Producto{
    constructor(nombre, marca='Null', servicio, precio, diseño='Null', envase='Null', color='Null', peso='Null', cantidad='Null'){
        this._nombre=nombre;
        this._marca=marca;
        this._servicio=servicio;
        this._precio=precio;
        this._diseño=diseño;
        this._envase=envase;
        this._color=color;
        this._peso=peso;
        this._cantidad=cantidad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca
    }

    get servicio(){
        return this._servicio;
    }
    set servicio(servicio){
        this._servicio=servicio
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio
    }

    get diseño(){
        return this._diseño;
    }
    set diseño(diseño){
        this._diseño=diseño
    }

    get envase(){
        return this._envase;
    }
    set envase(envase){
        this._envase=envase
    }

    get color(){
        return this._color;
    }
    set color(color){
        this._color=color
    }

    get peso(){
        return this._peso;
    }
    set peso(peso){
        this._peso=peso
    }

    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad=cantidad
    }

    get iva(){
        return precioiva
    }

    
    calcIva(){
        this.precio=this.precio*1
        this.precioiva=this.precio+(this.precio*0.19)
        console.log(this.precioiva) 
    }

}
//nombre, marca, servicio, precio, diseño='NaN', envase='NaN', color='NaN', peso='NaN', cantidad='NaN'
var obj1= new Producto('Toallitas Humedas','Arbora','Limpieza personal','1200','Rectangular/Naranja y Azul','Plastico','Blanco','10gr','10')
console.log(obj1)
console.log(`El nuevo producto es ${obj1.nombre} su marca es ${obj1.marca} y tiene un peso de ${obj1.peso}`)

console.log(`El valor del producto despues del Iva es ${obj1.precioiva}`)

//SETTER
obj1.nombre='Alcohol antiseptico'
//GETTER
console.log(obj1.nombre);

//SETTER
obj1.marca='REMY'
//GETTER
console.log(obj1.marca);
console.log(obj1)

//3.
//Exercises from the book
//Exercise 7.1
/*1. Create a class for Person including the constructor for firstname and lastname.
2. Create a variable and assign a value of the new Person object using your friend's first and last names.
3. Now add a second variable with another friend's name using their first name and last name.
4. Output both friends into the console with a greeting of hello.
*/ 

/*class Person{
    constructor(firstname,lastname){
        this._firstname=firstname;
        this._lastname=lastname;
    }
}

var person1= new Person('Beos', 'Becerra')
var person2= new Person('Fabian', 'Rivera')
var person3= new Person('Camilo', 'Garcia')

console.log(`Hi there!, ${person1._firstname}, ${person2._firstname} and ${person3._firstname}, How are you today?`)*/

//Exercise 7.2
/*1. Using the Person class from Practice exercise 7.1, add a method called
fullname, which returns the concatenated value of firstname and lastname
when invoked.
2. Create values for person1 and person2 using two friend's first and last names.
3. Using the fullname method within the class, return the full name of one or
both people.*/

/*class Person{
    constructor(firstname,lastname){
        this._firstname=firstname;
        this._lastname=lastname;
    }
    greet(){
        console.log('Hi there guys!') 
    }
    fullname(firstname,lastname){
        return firstname+' '+lastname
    }
}

var person1= new Person('Beos', 'Becerra')
var person2= new Person('Fabian', 'Rivera')
var person3= new Person('Camilo', 'Garcia')
var fullname1=person1.fullname('Beos','Becerra');
var fullname2=person2.fullname('Fabian','Rivera');
var fullname3=person3.fullname('Camilo','Garcia');
person1.greet()
console.log(`${fullname1}, ${fullname3} and ${fullname2}`)*/
