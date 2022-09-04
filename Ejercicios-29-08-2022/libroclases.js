/*class computedor {
    constructor(Pulgadas_pantalla,memoria,marca,precio,discoduro){
        this.Pulgadas_pantalla= Pulgadas_pantalla;
        this.memoria = memoria;
        this.marca = marca;
        this.precio = precio;
        this.discoduro = discoduro;
    }
    get iva1 (){
        this.iva1 = iva1;
    }
    set iva1 (iva1) {
        let pv = this.precio *iva1
        console.log ('El iva es: ',pv)
        let total = this.precio+pv
        console.log ('El precio total es: ',total)
    }
}

let lenovo = new computedor(16,'4 ram','Lenovo',12000000,'Solido')
console.log(lenovo)
lenovo.iva1 = 0.5



class celular extends computedor {
    constructor(Pulgadas_pantalla,memoria,marca,precio,color){
        super(Pulgadas_pantalla,memoria,marca,precio);
        this.color = color;
    }
}

let huawei = new celular (6,'4 ram','huawei','700000','azul')
console.log(huawei)*/

/*class Persona{
    constructor (nombre,documento){
        this._nombre = nombre;
        this._documento = documento;
    }
    get nombre(){
        return this._nombre}
    
    set nombre(nombre){
        this._nombre = nombre;}

    get documento(){
        return this._documento}
        
    set documento(documento){
        this._documento = documento;}
}

class Aprendiz extends Persona { 
    constructor (nombre, documento,ficha){
        super(nombre,documento)
        this.ficha = ficha; }

    get ficha(){
        return this._ficha}
            
    set ficha(ficha){
        this._ficha = ficha;}
        
    imprimirtodo(){
        console.log(this._nombre)
        console.log(this._documento)
        console.log(this._ficha)
    }
    }
let obj1 = new Persona ('Maria Gomez',2345)
let obj2 = new Aprendiz ('Juan Valdez',645786 ,'ADSI')

console.log(obj1)
console.log(obj2)

//SETTER
obj1.nombre='Fabian Rivera'
//GETTER
console.log(obj1.nombre)
obj2.imprimirtodo()*/

//

class Publicacion {
    constructor(titulo, precio) {
        this._titulo = titulo;
        this._precio = precio
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get titulo() {
        return `El titulo de la publicacion es ${this._titulo}`;
    }

    set precio(precio) {
        this._precio = precio;
    }
    get precio() {
        return `El titulo de la publicacion es ${this._precio}`;
    }
}

class Libro extends Publicacion {
    constructor(titulo, precio, nro_pag) {
        super(titulo, precio);
        this._nro_pag = nro_pag;
    }

    set nro_pag(nro_pag) {
        this._nro_pag = nro_pag;
    }
    get nro_pag() {
        return `El numero de paginas es ${this._nro_pag}`;
    }
}

class CD extends Publicacion {
    constructor(titulo, precio, tiempo_rep) {
        super(titulo, precio);
        this._tiempo_rep = tiempo_rep;
    }
    set tiempo_rep(tiempo_rep) {
        this._tiempo_rep = tiempo_rep
    }

    get tiempo_rep() {
        return `El tiempo de repreoduccion es ${this._tiempo_rep}`
    }
}

obj1 = new Libro('La odisea', 50000, 448)
obj2 = new CD('La odisea', 50000, 120)
console.log(obj1, obj2)
console.log(obj2)

obj1.titulo = 'Harry Potter'
console.log(obj1)

class Autos {
    constructor(numerosm, marca, año, precio) {
        this._numerosm = numerosm;
        this._merca = marca;
        this._año = año;
        this._precio = precio;
    }
    get numerosm() {
        return `el numero de serie es ${this._numerosm}`
    }
    get marca() {
        return `la marca es ${this._marca}`
    }
    get año() {
        return `el año es ${this._año}`
    }
    get precio() {
        return `el precio es ${this._precio}`
    }
    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
    }
    set numerosm(numerosm) {
        this._numerosm = numerosm;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set año(año) {
        this._año = año;
    }
    set precio(precio) {
        this._precio = precio;
    }
}
class Compactos extends Autos {
    constructor(numerosm, marca, año, precio, cpasajeros) {
        super(numerosm, marca, año, precio)
        this._cpasajeros = cpasajeros
    }
    get cpasajeros() {
        return `la cantidad de pasajeros es ${this._cpasajeros}`
    }
    set cpasajeros(cpasajeros) {
        this._cpasajeros = cpasajeros;
    }

}

obj1 = new Compactos('900385', 'Chevrolet', '2016', 60700000, '5')
console.log(obj1)

class Delujo extends Autos {
    constructor(numerosm, marca, año, precio, cpasajeros) {
        super(numerosm, marca, año, precio)
        this._cpasajeros = cpasajeros
    }
    get cpasajeros() {
        return `la cantidad de pasajeros es ${this._cpasajeros}`
    }
    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
        console.log(this._cpasajeros)
    }
    set cpasajeros(cpasajeros) {
        this._cpasajeros = cpasajeros
    }

}

obj2 = new Delujo('396,5 ', 'Volkswagen', '2014', 18000000000, '2')
console.log(obj2)

class Vagonetas extends Autos {
    constructor(numerosm, marca, año, precio, cpasajeros) {
        super(numerosm, marca, año, precio)
        this._cpasajeros = cpasajeros
    }
    get cpasajeros() {
        return `la cantidad de pasajeros es ${this._cpasajeros}`
    }

    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
        console.log(this._cpasajeros)
    }
    set cpasajeros(cpasajeros) {
        this._cpasajeros = cpasajeros
    }

}
obj3 = new Vagonetas('3948815', 'Ford', '2015', 690400500, '15')
console.log(obj3)

class Camioneta extends Autos {
    constructor(numerosm, marca, año, precio, capacidadk, cejes, crodadas) {
        super(numerosm, marca, año, precio)
        this._capacidadk = capacidadk
        this._cejes = cejes
        this._crodadas = crodadas
    }
    get capacidadk() {
        return `La capacidad de kilos es de ${this._capacidadk}`
    }
    get cejes() {
        return `La cantidad de ejes es de ${this._cejes}`
    }
    get crodadas() {
        return `La cantidad de rodadas es de ${this._crodadas}`
    }
    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
        console.log(this._capacidadk)
        console.log(this._cejes)
        console.log(this._crodadas)

    }
    set capacidadk(capacidadk) {
        this._cpasajeros = capacidadk
    }
    set cejes(cejes) {
        this._cpasajeros = cejes
    }
}

obj4 = new Camioneta('52WVC10338 ', 'Chevrolet', '2020', 580000000, '8')
console.log(obj4)