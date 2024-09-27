let genUsu = require('./generarusuario')
let fs = require('fs')

const CARPETA_ARHCIVOS_INPUT = "c:\\input\\"

let generarMilUsuarios = () => {
    let arrUsuarios = []

    for (let idx=1; idx <= 1000; idx++) {
        arrUsuarios.push(genUsu())
    }

    return arrUsuarios
}

let convertiraJson_pura = (obj) => {
    return JSON.stringify(obj, null, 4)
}

let obtenerPathInput = (id) => {
    return [CARPETA_ARHCIVOS_INPUT, id, ".json"].join('')
}

let guardarArchivoInput = (usu) => {
    console.log(usu)
    let strUsu = convertiraJson_pura(usu)
    fs.writeFileSync(obtenerPathInput(usu.id), strUsu, 'utf8')
}

let guardarArrUsuariosInput = (usuarios) => {
    for (let item of usuarios) {
        guardarArchivoInput(item)        
    }
}

let visualizarUsuarios = (usuarios) => {
    for (let item of usuarios) {
        console.log(convertiraJson_pura(item))
    }
}

///////////////////////////////////////////////////

let leerTodosLosUsuarios = () => {
    // fs.readdirSync    
    // return un array con todos los usuarios en binario
    // for .. of
    // leo cada uno de los archivos
    JSON.parse('{"nombre":"andy"}')
    // le aplico sobre amount el 5%
    // en otro campo que se llame inpuesto
    // 1) Genero el out en otro array ?
    // 2) Lo descargo directo a la carpeta output con el mismo nombre
}





module.exports = () => {            
    // let xs = generarMilUsuarios()
    // let s = visualizarUsuarios(xs)
    // guardarArrUsuariosInput(xs)
    leerTodosLosUsuarios()
}