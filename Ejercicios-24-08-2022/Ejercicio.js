//Estado y comportamiento
var x=12;
class Animal{
    constructor(nombre){
        this._nombre=nombre;
        //console.log('Se activo el constructor');
    }
    //camell case
    //getNombre(){
    //   return this.nombre;
    //}
    get nombre(){
        return this._nombre;
    }
    //setNombre(nombre){
    //    this.nombre=nombre;
    //}
    set nombre(nombre){
        this._nombre=nombre;
    }
    mensaje(){
        console.log('Soy un mensaje');
    }
}
var objeto1=new Animal('Conejo');
console.log(objeto1)
//objeto1.setNombre('Liebre')
objeto1.nombre='Conejo Domestico'
//console.log(objeto1.getNombre())
console.log(objeto1.nombre);
//console.log(typeof(objeto1))



//Escriba metodos para:
//suma, promedio, mayor, menor
//Escriba una clase que represente un producto comercial de cualoquier area. Debe tener constructor, setter, getters y un metodo para calcular el valor despues de IVA.
//Leer Classes 149-161