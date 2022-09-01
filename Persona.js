const Cliente = require('./Cliente.js');
class Persona extends Cliente {
    constructor(nombre, direccion, correo, telefono, nro_doc, apellido) {
        super(nombre, direccion, correo, telefono);
        this._nro_doc = nro_doc;
        this._apellido = apellido;
    }
}