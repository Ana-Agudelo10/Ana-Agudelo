/*Menu
1. Agregar producto
2. Eliminar productog
3. Ordenar
4. Sobre escribir
5. Buscar
6. Salir*/
var menu = Math.trunc(Math.random() * (7 - 1) + 1);
var array = ['blue', 'black', 'white', 'yellow ', 'green']
console.log(menu)

if (menu != 6) {
    if (menu == 1) {
        array.push('cyan')
        console.log(array)

    } else if (menu == 2) {
        array.splice(4, 1, 'green')
        console.log(array)

    } else if (menu == 3) {
        array.sort()
        console.log(array)

    } else if (menu == 4) {
        array[-1] = 'pink'
        array.splice(3, 0, 'orange', 'gray')
        console.log(array)

    } else if (menu == 5) {
        buscar = array.find(elemento => elemento.menu == 'black')
        console.log(array)
    }
    var menu = Math.trunc(Math.random() * (7 - 1) + 1);
    console.log('La opcion ')
}
console.log('El programa a terminado')