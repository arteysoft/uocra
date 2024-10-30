import fs from 'fs'

export let corteListon = () => {
    console.log('es el problema de corte de liston')
    forEver("10 20 50 120 111 160 15 20 35 45 85 85 85 15 14 13 200 290 180 154 69 25 288")
}
let calcularDesperdicio = (sumaCortes, tamanioListon) => {
    return tamanioListon - sumaCortes
    /*
    return Math.floor(1000 - Math.round(sumaCortes /
        tamanioListon * 1000)) / 10
    */
}

export let aplicarCortes = (cortes: number[], tamanioListon: number) => {
    let sumaCortes: number = cortes.reduce((tot, c) => tot + c, 0)
    let arrVacio: number[] = []
    if (sumaCortes <= tamanioListon) {
        return {
            cortesAplicados: cortes,
            cortesRestantes: arrVacio,
            quedanCortes: false,
            desperdicio: calcularDesperdicio(sumaCortes, tamanioListon),
        }
    }

    let totalConsumido = 0
    let totalProyectado = 0
    let salir = false
    let puntoDeCorte = 0

    for (let idx = 0; salir === false; idx++) {
        totalProyectado += cortes[idx]
        if (totalProyectado > tamanioListon) {
            puntoDeCorte = idx
            salir = true
            continue
        }
        totalConsumido = totalProyectado
    }

    return {
        cortesAplicados: cortes.slice(0, puntoDeCorte),
        cortesRestantes: cortes.slice(puntoDeCorte),
        quedanCortes: true,
        desperdicio: calcularDesperdicio(totalConsumido,
            tamanioListon)
    }
}

let randomizarListon = () => {
    return (Math.random() > 0.50) ? 300 : 420
}

export interface ItemSolucion {
    cortes:number[],
    liston:number,
    desperdicio:number
}

let encontrarSolucion = (cortesParam):ItemSolucion[] => {
    let solucion:ItemSolucion[] = []

    for (let continuar = true ;continuar;) {
        let liston = randomizarListon()
        let resp = aplicarCortes(cortesParam, liston)
        
        let itemSolucion:ItemSolucion = {
            cortes: resp.cortesAplicados,
            liston: liston,
            desperdicio: resp.desperdicio
        }

        solucion.push(itemSolucion)
        continuar = resp.quedanCortes        
        cortesParam = resp.cortesRestantes
    }

    return solucion
}

// Iterar hata encontrar la mejor solucion
// forEver :: string => ItemSolucion[]

export let forEver = (strCortes: string):ItemSolucion[] => {
    let mejorSolucion:ItemSolucion[] = []
    let menorDesperdicio = Infinity
 
    let cortes:number[] = strCortes.split(' ').map(z => parseInt(z))

    for (let b = 1; b <= 10000; b++) {
       cortes = cortes.sort((a,b) => Math.random() - 0.5)       
       let solucion = encontrarSolucion(cortes)       
       let desperdicioDeLaSolucion =
           solucion
                .map(z => z.desperdicio)
                .reduce((a, b) => a + b, 0)
 
       if (desperdicioDeLaSolucion < menorDesperdicio) {
           menorDesperdicio = desperdicioDeLaSolucion
           mejorSolucion = solucion      
       }
    }
    return mejorSolucion 
 }
 

