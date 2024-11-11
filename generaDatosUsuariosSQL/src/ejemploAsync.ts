/*
Como ir del callback hell a las promises
*/
import * as todoElDriver from 'mysql2/promise'
import { crearConexion, query, insert } from "./driverPromise"

// Parte 1

let ejecutarDentroDe3Segundos = (fn) => {
    setTimeout(fn, 3000)
}  

/*
console.log('Arranca a contar el tiempo ...')
ejecutarDentroDe3Segundos(() => {    
    console.log('termino la llamada a la funcion ...')
    console.log('Arranca a contar el tiempo ...')
    ejecutarDentroDe3Segundos(() => {
        console.log('termino la llamada a la funcion ...')
        console.log('Arranca a contar el tiempo ...')
        ejecutarDentroDe3Segundos(() => {
            console.log('termino la llamada a la funcion ...')
        })
    })    
})
*/

// parte 2

let espere3Segundos = async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(0)
        }, 3000)
    })
}

/*
console.log('Arranca a contar el tiempo ...')
espere3Segundos()
.then(() => {
    console.log('termino la llamada a la funcion ...')
    return espere3Segundos()
})
.then(() => {
    console.log('termino la llamada a la funcion ...')
    return espere3Segundos()
})
.then(() => {
    console.log('termino la llamada a la funcion ...')
    return espere3Segundos()
})
*/ 


// parte3

let funcionAsincronica = async () => {
    
    let conn:todoElDriver.Connection

    try {
        conn = await crearConexion()

        /*
        ejemplo insert(conn, "insert TABLA values ('?,?,?'), [1, 2, 3])
        */


        /*
        aca van a hacer un for con 1000 choferes
        pueden utilizar el api de usuarios random
        mas el Math.random
        La sintaxis, chusmear manejadorSQLUsuarios
        */

        conn.end()
    }
    catch (err) {
        console.log(err)
    }

    console.log('Arranca a contar el tiempo ...')    
    await espere3Segundos()
    console.log('ya pasaron 3 segundos...')    
}

funcionAsincronica()


