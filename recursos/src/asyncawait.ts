import 'dotenv/config'

import fs from 'fs'
import {insertOne} from './lib/driverMongo'

let leerCarpetaRaiz = () => {
    return new Promise((resolve, reject) => {
        fs.readdir('/var', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })    
    })
}

let leerCarpeta = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir('/var/' + path, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

let hacerTodoElProcesoConAsyncAwait = async () => {
    let arrRaiz:any = await leerCarpetaRaiz()
    for (let x of arrRaiz) {
        console.log(x)
        let arrNivel2:any = await leerCarpeta(x)
        console.log('----> ')
        for (let y of arrNivel2) {
            console.log(y)
            await insertOne('carpetas', {raiz: x, dentro: y})
        }
    }
}

hacerTodoElProcesoConAsyncAwait()

