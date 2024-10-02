import fs from 'fs/promises'
import genUsuario from '../lib/genusuario'
import {insertOne} from '../lib/driverMongo'
import createLog from '../cfg/logger'

let log = createLog('pruebaMongo')

/*
export let pruebaMongo = () => {
    const url = 'mongodb://0.0.0.0:27017'

    let cliente:MongoClient

    MongoClient.connect(url)
    .then((c) => {
        cliente = c
        let db = cliente.db('nodebreaker_10')
        let collection = db.collection('alumnos')
        return collection
    })
    .then(colAlu => {
        return colAlu.insertOne(genUsuario())
    })
    .then(() => {
        cliente.close()
    })
}

*/

export let pruebaMongo = () => {
    let usu = genUsuario()
    insertOne('clientes', usu)
    .then(console.log)
    .catch(console.log)
}

let checkStr = (x:string|undefined):string => {
    if (x === undefined) {
        throw new Error('El parametro, no puede ser undefined')
    }
    return x
}

export let levantarArchivos = async () => {
    let archivos = await fs.readdir(checkStr(process.env.PATH_UBICACION_ARCHIVOS_OUTPUT))
    console.log(archivos)    
    try {
        for (let unArchivo of archivos) {
            let fullPath = [checkStr(process.env.PATH_UBICACION_ARCHIVOS_OUTPUT), unArchivo].join('/')
            console.log(fullPath)
            let contenidoPlano = await fs.readFile(fullPath, 'utf-8')
            let contenidoJson = JSON.parse(contenidoPlano)
            await insertOne('clientes', contenidoJson)
            await fs.unlink(fullPath)
        }
    }
    catch (err) {
        console.log(err)
    }
}

export let genClientesRandom = async () => {
    for (let idx=0; idx < 20; idx++) {
        let cliente = genUsuario()
        log.info('generando cliente random e insertando en mongo: ' + idx)
        await insertOne('clientes', cliente)
    }
}