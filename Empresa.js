const Cliente = require('./Cliente');
class Empresa extends Cliente {
    constructor(nombre, direccion, correo, telefono, rut) {
        super(nombre, direccion, correo, telefono)
        this._rut = rut;
    }
}

module.export = Empresa;