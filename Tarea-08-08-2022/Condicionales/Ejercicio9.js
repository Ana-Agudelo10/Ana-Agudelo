//9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es posterior

var dd = 01
var mm = 04
var aa = 2020

dd1 = (dd-04)
mm1 = (mm-08)
aa1 = (aa-2022)

if (aa < 2022) {
  aa1 = aa1 * -1
  console.log(`Han pasado ${aa1} años ${mm1} meses ${dd1} dias`)
} else if (mm < 08) {
  mm1 = mm1 * -1
  console.log(`Han pasado ${aa1} años ${mm1} meses ${dd1} dias`)
} else if (dd < 04) {
  dd1 = dd1 * -1
  console.log(`Han pasado ${aa1} años ${mm1} meses ${dd1} dias`)
} else if (dd == 04) {
  if (mm == 08) {
    if (aa == 2022) {
      console.log(`Se encuentra en la fecha ingresada`)
    }
  } else {
    console.log(`Hacen falta ${aa1} años ${mm1} meses ${dd1} dias `)
  }
} else {
  console.log(`Hacen falta ${aa1} años ${mm1} meses ${dd1} dias `)
}