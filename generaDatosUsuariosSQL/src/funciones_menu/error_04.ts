/*
Ejercicio: 

hacer una funcion m1 = (n) => { m2(n+1) }
despues m2 = n => { m3(n+1) }
m3, m4, m5, m6
*/

import 'dotenv/config'
import { crearConexion, query } from '../driverPromise'

let funcionInterna = async (esError:boolean, ...valores) => {
    let conn = await crearConexion()
    let sql = "INSERT INTO reservas values (?, ?)"
    
    if (esError) {
        sql = "INSERT INTAEO reservas values (?, ?)"
    }

    await query(conn, sql, valores)
    conn.end()
}

let m6 = async (numero) => {
    console.log("Voy a insertar el numero ", numero)
    if (numero === 0) {
        return await funcionInterna(true, 1, 2)
    }
    else {
        return await funcionInterna(false, 1, 2)
    }
}

let m5 = async (numero) => {
    console.log('Antes de llamar a m6')
    let res = await m6(numero + 1)
    console.log('Despues de llamar a m6')
    return res
}

let m4 = async (numero) => {
    console.log('Antes de llamar a m5')
    let res = await m5(numero + 1)
    console.log('Despues de llamar a m5')
    return res
}

let m3 = async (numero) => {
    console.log('Antes de llamar a m4')
    let res = await m4(numero + 1)
    console.log('Despues de llamar a m4')
    return res
}

let m2 = async (numero) => {
    console.log('Antes de llamar a m3')
    let res = await m3(numero + 1)
    console.log('Despues de llamar a m3')
    return res
}

let m1 = async (numero) => {
    console.log('Antes de llamar a m2')
    let res = await m2(numero + 1)
    console.log('Despues de llamar a m2')
    return res
}

m1(-5)
.then(z => console.log("finalizado"))
.catch(z => console.log("salio x error"))