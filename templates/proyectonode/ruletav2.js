//  Un acumulado de las fichas que tengo
//  Randomizador
//  Habiamos dicho que la probabilidad de 
//  negro o rojo: 18/37 y la del 0 1/37

// Testeable
let crearArray = () => {
    // retorna un array
    let numeros = ["verde"]
    for (let i = 1; i <= 37; i++) {
        numeros.push((i%2===0) ? "rojo" : "negro")
    }
    return numeros
}

// No es testeable
let tirarBola = () => {    
    let numeroSacado = Math.round(Math.random() * 37)
    // Muchos resultados. La hora, el numero, el color
    return numeroSacado
}

// Es testeable
let recibirApuestaNumeroRetornarEstrategia = (
    numeroQueSalio,
    colorApostado,
    montoApuesta,
) => {
    let numeros = crearArray()
    let paraGuardar = 0
    let paraApostar = 0
    if (colorApostado === numeros[numeroQueSalio]) {
        paraGuardar = (montoApuesta * 2) - 1
        paraApostar = 1
    } else {
        paraGuardar = montoApuesta * -1
        paraApostar = (montoApuesta * 2)
    }
    
    return { 
        paraGuardar, 
        paraApostar,
        total: paraGuardar + paraApostar
    }
}

let fnPrincipal = () => {
    let estrucApuesta = {
        paraGuardar : 0,
        paraApostar : 1,
        total : 1
    }

    for (;;) {
        let numeroQueSalio = tirarBola()

        // input
        console.log('input')
        console.log(estrucApuesta)

        let objRespJugada = recibirApuestaNumeroRetornarEstrategia(
            numeroQueSalio,
            "rojo",
            estrucApuesta.paraApostar
        )

        estrucApuesta.paraGuardar += objRespJugada.paraGuardar
        estrucApuesta.paraApostar = objRespJugada.paraApostar        

        // output 
        console.log('output')
        console.log(objRespJugada)        
    }
    console.log("=========================")
    console.log(estrucApuesta)
}

fnPrincipal()

/*
Introdusco un cambio
*/

