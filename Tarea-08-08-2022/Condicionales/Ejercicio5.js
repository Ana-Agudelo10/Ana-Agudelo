//5. En un juego de preguntas a las que se responde "Sí" o "No" gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
//1. Colon descubrio America?
//2. La independencia de Colombia fue en el año 1810?
//3. The Doors fue un grupo de rock Americano?

console.log('¿Colón descubrio América?')
var a = 'Si'
console.log(a)

if (a =='Si'){
  console.log('¿La independencia de Colombia fue en el año 1810?')
  var b = 'Si'
  console.log(b)

  if (b =='Si'){
    console.log('¿The Doors fue un grupo de rock Americano?')
    var c = 'Si'
    console.log(c)
    if (c =='Si'){
      console.log('Has contestado asertivamente todas las preguntas. ¡Gracias por jugar!')
    }else{
      console.log('El juego a terminado. ¡Gracias por participar!')
    }
  }else{
    console.log('El juego a terminado. ¡Gracias por participar!')
  }
}else{
  console.log('El juego a terminado. ¡Gracias por participar!')
}