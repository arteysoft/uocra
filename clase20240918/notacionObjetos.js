let keyValue = {}

keyValue['totalCortes'] = 88
keyValue.longitudTotal = 3000000
keyValue.elementosCortar = [
    {
        largo: 22,
        ancho: 334
    }
    ,
    {
        largo: 220,
        ancho: 3340
    }
]
keyValue.datosPer = {
    nombre: "hyab",
    apellido: "sarasa",
    domicilio: {
        calle: "San Juan"
    }
}

console.log(keyValue)
console.log(Object.keys(keyValue))
console.log(keyValue.hasOwnProperty("datosPer"))
console.log(keyValue.hasOwnProperty("datosPer2"))
console.log(JSON.stringify(keyValue))

console.log('---------------------------------')
for (let k of Object.keys(keyValue)) {
    console.log(k, keyValue[k])
}


