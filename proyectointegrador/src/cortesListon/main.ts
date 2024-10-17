import fs from 'fs'

export let corteListon = () => {
    console.log('es el problema de corte de liston')
    forEver()
}
let calcularDesperdicio = (sumaCortes, tamanioListon) => {
    return Math.floor(1000 - Math.round(sumaCortes /
        tamanioListon * 1000)) / 10
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

let forEver = () => {
    let mejorSolucion:ItemSolucion[] = []
    let menorDesperdicio = Infinity
 
    let strCortes = fs.readFileSync('c:/uocra/proyectointegrador/src/cortesListon/cortes.txt', 'utf-8')
    let cortes:number[] = strCortes.split(' ').map(z => parseInt(z))

    for (let b = 1; b <= 10; b++) {
       cortes = cortes.sort((a,b) => Math.random() - 0.5)       
       let solucion = encontrarSolucion(cortes)       
       let desperdicioDeLaSolucion =
           solucion
                .map(z => z.desperdicio)
                .reduce((a, b) => a + b, 0)
 
       if (desperdicioDeLaSolucion < menorDesperdicio) {
           menorDesperdicio = desperdicioDeLaSolucion
           mejorSolucion = solucion      
           console.log('Encontre una solucion mejor')     
           console.log(mejorSolucion)
           console.log('Desperdicio total: ', desperdicioDeLaSolucion)
       }
    }    
 }
 

