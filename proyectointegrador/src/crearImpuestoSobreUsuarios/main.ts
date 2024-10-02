// let fs = require('fs')
import {lstatSync, readFileSync, readdirSync} from 'fs'

const CARPETA_ARHCIVOS_INPUT = "c:\\input\\"

let leerContenidoArchivo = (rutaDelArchivo) => { 
    return readFileSync(rutaDelArchivo, 'utf-8')
}

let leerNombresDeArchivosExistentesCarpeta = () => {
    let nombresArchivos = readdirSync(CARPETA_ARHCIVOS_INPUT)
    return nombresArchivos
}

let recorrerCadaUnoDeLosArchivos = () => {
    let archivos = leerNombresDeArchivosExistentesCarpeta()
    for (let arch of archivos) {
        let pathCompleto = [CARPETA_ARHCIVOS_INPUT, arch].join('')
        pathCompleto = CARPETA_ARHCIVOS_INPUT + arch
        pathCompleto = CARPETA_ARHCIVOS_INPUT.concat(arch)
        lstatSync(pathCompleto).isFile()
        console.log(pathCompleto)
        let contenido = leerContenidoArchivo(pathCompleto)
        let objUsuario = JSON.parse(contenido)
        console.log(parseFloat(objUsuario.amount) * 0.05)
    }
}

let leerTodosLosUsuarios = () => {
    recorrerCadaUnoDeLosArchivos()
}

export default () => {
    leerTodosLosUsuarios()
}
