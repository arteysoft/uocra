let genUsu = require('./generarusuario')
let fs = require('fs')

const PATH_ARCHIVO_OUTPUT = "c:\\archivos\\usugen.txt"

let escribirArchivo = (o) => {    
    fs.appendFileSync(PATH_ARCHIVO_OUTPUT, 
        JSON.stringify(o, null, 4), 'utf-8')
}

let generarMilUsuarios = () => {
    for (let idx=0; idx < 1000; idx++) {
        console.log(idx)        
        escribirArchivo(genUsu())
    }
}

// module.exports = generarMilUsuarios
module.exports = () => {
    // escribirArchivo({nombre:"ignacio"}) 
    generarMilUsuarios()
}