/*
Ejercicio: 

hacer una funcion m1 = (n) => { m2(n+1) }
despues m2 = n => { m3(n+1) }
m3, m4, m5, m6
*/

import 'dotenv/config'
import { crearConexion, query } from '../driverPromise'

interface MayBe {
    funciono:boolean
    data:any
}

interface Optional {
    funciono:boolean
    data:any
}

let m6 = async (numero):Promise<MayBe> => {
    console.log("Voy a dividir 100 / ", numero)
    if (numero === 0) {        
        return { funciono: false, data: "esto es un error ya que no se puede dividir x zero" }
    }
    else {
        return { funciono: true, data: 100 / numero }
    }
}

let m5 = async (numero) => {
    console.log('Antes de llamar a m6')
    let res = await m6(numero + 1)
    if (res.funciono === false) {
        return res
    }
    console.log('Despues de llamar a m6')        
    return { funciono: true, data: "genero el QR o path de la imagen"}
}

let m4 = async (numero) => {
    console.log('Antes de llamar a m5')
    let res = await m5(numero + 1)
    if (res.funciono === false) {
        return res
    }
    console.log('Despues de llamar a m5')
    return res
}

let m3 = async (numero) => {
    console.log('Antes de llamar a m4')
    let res = await m4(numero + 1)
    if (res.funciono === false) {
        return res
    }
    console.log('Despues de llamar a m4')
    return res
}

let m2 = async (numero) => {
    console.log('Antes de llamar a m3')
    let res = await m3(numero + 1)
    if (res.funciono === false) {
        return res
    }
    console.log('Despues de llamar a m3')
    return res
}

let m1 = async (numero) => {
    console.log('Antes de llamar a m2')
    let res = await m2(numero + 1)
    if (res.funciono === false) {
        return res
    }
    console.log('Despues de llamar a m2')
    return res
}

m1(-5)
.then(z => { 
    if (z.funciono === false) {
        console.log("Termino con problemas NO SE HIZO LA RESERVA")        
    }
    console.log("finalizado") 
    console.log("retorno codigo ", z)
})
