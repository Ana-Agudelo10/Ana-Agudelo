class Cliente {

    constructor(nombre, direccion, edad, correo, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._correo = correo;
        this._telefono = telefono;
        this._edad = edad
    }
    asignar() {

    }
    validacionEdad(edad) {
        if (edad < 18) {
            return `No se puede ingresar`
        }
    }
}

module.export = Cliente;