class ErrorCantidadParametrosIncorrecta extends Error {

}

class ErrorParametroAusente extends Error {

}

let exlorarExceptions = async (parametroStr:string):Promise<string> => {
    console.log('estoy dentro de la funcion exlorarExceptions')
    let a1:Error = new Error()
    let cpiErr:ErrorCantidadParametrosIncorrecta = new ErrorCantidadParametrosIncorrecta()

    a1.message = 'debe enviar un parametro del 1 al 5'
    a1.name = 'ERROR_FUERA_DEL_RANGO_ADECUADO'

    cpiErr.message = 'no se recibio ningun parametro'
    cpiErr.name = 'ERROR_PARAMETRO_AUSENTE'

    if (parametroStr === undefined) {
        throw cpiErr
    }

    let paramInteger = parseInt(parametroStr)
    if (isNaN(paramInteger)) {
        throw new Error('aun pudiendo crear mi propia exception, tiro un error comun Not A Number')
    }
    
    if (paramInteger < 1 || paramInteger > 5) {
        throw a1
    }
    return 'salio todo ok'
}

let DentroDeUnaFuncion = async () => {
    try {
        exlorarExceptions(process.argv[2])
    }
    catch (err) {
        console.log(err)
    }
}


exlorarExceptions(process.argv[2])
.then(str => {
    console.log(str)
})
.catch(e => {
    console.log('primero voy a mostrar todo el error tal como la hace el console.log')
    console.log(e)
    console.log()
    console.log('Ahora voy a mostrar el error a mi manera')
    console.log([e.name,e.message].join(':'))
})


export default exlorarExceptions