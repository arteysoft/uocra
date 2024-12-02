class ErrorNoForzado extends Error {

}

let ex = async (parametroStr):Promise<string> => {
    console.log('estoy dentro de la funcion ex')
    let a1:Error = new Error()
    let a2:ErrorNoForzado = new ErrorNoForzado()

    a1.message = 'debe enviar un parametro del 1 al 5'
    a1.name = 'ERROR_PARAMETRO_AUSENTE'

    a2.message = 'no se recibio ningun parametro'
    a2.name = 'CANTIDAD_PARAM_INCORRECTA'

    if (parametroStr === undefined) {
        throw a2
    }

    let paramInteger = parseInt(parametroStr)
    
    if (paramInteger < 1 || paramInteger > 5) {
        throw a2
    }
    return 'salio todo ok'
}


ex(parseInt(process.argv[2]))
.then(str => {
    console.log(str)
})
.catch(e => {
    console.log([e.name,e.message].join(':'))
})


export default ex