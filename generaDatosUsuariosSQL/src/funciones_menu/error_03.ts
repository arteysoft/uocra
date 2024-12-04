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

let realizarReserva = async () => {
    try {
        return await funcionInterna(false, 2, 3)
    }
    catch (err) {
        console.log('hubo un error en la funcion interna')
    }
}

let imprimirQR = async (codReserva) => {
    // me voy a manejar para imprimir el QR
    
}

let fnInit = async () => {    
    console.log('Voy a realizar una reserva')
    let codReserva = await realizarReserva()
    console.log('voy a imprimir el pdf QR')
    await imprimirQR(codReserva)
}    

fnInit()

/*
Problema de los errores:
El problema de los errores es que si no se advierte a
todo el callStack el error se propaga en formas que
no sabemos en que termina
*/