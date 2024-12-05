/*
Ejercicio: 

hacer una funcion m1 = (n) => { m2(n+1) }
despues m2 = n => { m3(n+1) }
m3, m4, m5, m6
*/

import 'dotenv/config'
import { crearConexion, query } from '../driverPromise'

let m6 = async (numero):Promise<Number | Error> => {
    console.log("Voy a dividir 100 / ", numero)
    if (numero === 0) {        
        let error:Error = { name: "NO_PUEDO_DIVIDIR_X_ZERO", message: "Atencion que recibo como parametro un zero y eso esta previsto como error"  }
        return error
    }
    else {
        return 100 / numero
    }
}

let m5 = async (numero):Promise<Number | Error> => {
    console.log('Antes de llamar a m6')
    let res = await m6(numero + 1)
    if (res instanceof Error) {
        return res
    }
    console.log('Despues de llamar a m6')        
    return res
}

let m4 = async (numero):Promise<Number | Error> => {
    console.log('Antes de llamar a m5')
    let res = await m5(numero + 1)
    if (res instanceof Error) {
        return res
    }
    console.log('Despues de llamar a m5')
    return res
}

let m3 = async (numero):Promise<Number | Error> => {
    console.log('Antes de llamar a m4')
    let res = await m4(numero + 1)
    if (res instanceof Error) {
        return res
    }
    console.log('Despues de llamar a m4')
    return res
}

let m2 = async (numero):Promise<Number | Error> => {
    console.log('Antes de llamar a m3')
    let res = await m3(numero + 1)
    if (res instanceof Error) {
        return res
    }
    console.log('Despues de llamar a m3')
    return res
}

let m1 = async (numero):Promise<Number | Error> => {
    console.log('Antes de llamar a m2')
    let res = await m2(numero + 1)
    if (res instanceof Error) {
        return res
    }
    console.log('Despues de llamar a m2')
    return res
}

m1(-5)
.then(z => { 
    if (z instanceof Error) {
        console.log("Termino con problemas NO SE HIZO LA RESERVA")        
    }
    else {
        console.log("finalizado") 
        console.log("retorno codigo ", z)
    }
})
