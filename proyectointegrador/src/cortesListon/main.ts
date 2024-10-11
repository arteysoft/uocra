export let corteListon = () => {
    console.log('es el problema de corte de liston')
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

let encontrarSolucion = (cortes) => {
    let solucion:ItemSolucion[] = []

    for (let continuar = true ;continuar;) {
        let liston = randomizarListon()
        let resp = aplicarCortes(cortes, liston)
        let itemSolucion:ItemSolucion = {
            cortes: resp.cortesAplicados,
            liston: liston,
            desperdicio: resp.desperdicio
        }

        solucion.push(itemSolucion)
        continuar = resp.quedanCortes
    }
}
