const faker = require('faker'); // CommonsJS
import {v4 as uuid} from 'uuid'
import * as fs from 'fs'

import genUsuario from '../lib/genusuario'
import { Usuario } from '../interfaces/Usuario';

let fnGrabar = (iteracion:number) => {
    let usu:Usuario = genUsuario()
    console.log(usu)

    if (iteracion > 10000) {
        return
    }

    let pathArch = [process.env.PATH_UBICACION_ARCHIVOS_OUTPUT, '/', usu.id, '.json'].join('')

    fs.writeFile(pathArch, JSON.stringify(usu), 'utf-8', err => {
        console.log(err?err:'')
        fnGrabar(iteracion + 1)
    })
}

export default () => fnGrabar(1)