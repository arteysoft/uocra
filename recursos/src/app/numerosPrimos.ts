import {esPrimo} from '../ejercicio/commons/commons'
import {insertarNumeroPrimoSQL} from '../lib/manejadorSQL'

let arrNumPrimos:Array<number> = [2]

export let discoverNumerosPrimosEnRecursion = () => {
    (function iterador(numero) {
        if (esPrimo(numero, arrNumPrimos)) {
            arrNumPrimos.push(numero)
            console.log(numero, 'es primo')
            insertarNumeroPrimoSQL(numero, err => {
                if (err) {
                    console.log(err)
                    return                    
                }
                setTimeout(() => {
                    iterador(numero + 1)
                }, 0)
                return
            })
        }
        else {
            console.log(numero, 'NO es primo')
            setTimeout(() => {
                iterador(numero + 1)
            }, 0)
        }
    })(3)
}
