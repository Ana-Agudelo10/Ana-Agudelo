class Carrito {
    constructor(cantUnidades) {
        this._cantUnidades = cantUnidades
    }
    agregarProd(nuevoproducto) {
        this._producto.push(nuevoproducto);

    }
    vaciarProd(nuevoproducto) {
        this._producto.pop(nuevoproducto)
    }
    confirmacion() {
        return True
    }
    static cantUnidades(nuevoproducto) {
        agrergarProd(nuevoproducto) + 1
    }

}