/*
Quiero hacer una funcion que tome un array y responda con otro array
El array de input, son todos los cortes que pide el cliente
El output es los cortes que NO entraron en 1 liston
*/

let calcularDesperdicio = (xsCortes, longitudListon) => {
    let sumaCortes = xsCortes.reduce((acumulado, z) => acumulado + z, 0)
    if (sumaCortes > longitudListon) {
        throw new Error('calcularDesperdicio::longitud inadmisible')
    }
    return (1 - (sumaCortes/longitudListon))
}

let calcularRatio = (acumuladoDeCortes, largoTabla) => {
    if (acumuladoDeCortes > largoTabla) {
        throw new Error('calcularRatio::longitud inadmisible')
    }
    let r = acumuladoDeCortes/largoTabla
    return (Math.round(100 - (r*100)) / 100)
}

let calcularCortesEnListon3M = (xsParam) => {
    const TOTAL_ITEMS_ARRAY = xsParam.length
    const TOTAL_LARGO_LISTON = 300
    let largoAcumulado = 0

    for (let idx = 0; idx < TOTAL_ITEMS_ARRAY; idx++) {
        if (xsParam[idx] > TOTAL_LARGO_LISTON) {
            throw new Error('un corte, no puede superar los 3m')
        }                
        // console.log(idx, xsParam[idx], largoAcumulado)        
        if ((largoAcumulado + xsParam[idx]) > TOTAL_LARGO_LISTON) {
            // Prueba y error            
            // console.log('calculo desperdicio sobre: ', largoAcumulado)
            return { 
                asignados: xsParam.slice(0, idx),
                restanAsignar: xsParam.slice(idx), 
                desperdicio: calcularRatio(largoAcumulado, TOTAL_LARGO_LISTON) }
        }        
        largoAcumulado += xsParam[idx]
    }

    // console.log('calculo desperdicio sobre: ', largoAcumulado)
    return { 
        asignados: xsParam.slice(0, TOTAL_LARGO_LISTON),
        restanAsignar: [],         
        desperdicio: calcularRatio(largoAcumulado, TOTAL_LARGO_LISTON) }
}


let totalCortes = [60, 120, 35, 32, 33, 77, 200, 210, 265]
console.log('Total de cortes: ')
console.log(totalCortes)

let prueba1 = calcularCortesEnListon3M(totalCortes)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)

console.log(calcularRatio(13, 100))

/*
let desp = calcularCortesEnListon3M([5, 4, 5, 6, 7, 5, 5, 50, 7])
console.log(desp)
*/

