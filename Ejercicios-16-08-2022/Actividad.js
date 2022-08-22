var menu = Math.trunc(Math.random() * (7 - 1) + 1);
var array = ['blue', 'black', 'yellow', 'green']
console.log(`opcion ${menu}`)

while (menu != 6) {
    if (menu == 1) {
        console.log(`opcion 1`)
        array.push('cyan')
        console.log(array)


    } else if (menu == 2) {
        console.log(`opcion 2`)
        array.pop()
        console.log(array)


    } else if (menu == 3) {
        console.log(`opcion 3`)
        array.sort()
        console.log(array)


    } else if (menu == 4) {
        console.log(`opcion 4`)
        array[0] = 'pink'
        array.splice(4, 0, 'orange', 'gray')
        console.log(array)


    } else if (menu == 5) {
        console.log(`opcion 5`)
        buscar = array.indexOf('black')
        console.log(buscar)

    }

    menu = Math.trunc(Math.random() * (7 - 1) + 1);
}
console.log(`opcion 6`)
console.log('El programa a terminado')