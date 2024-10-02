import 'dotenv/config'

import crearArchivos from './app/crearArchivos'
import {esPrimo} from './ejercicio/commons/commons'
import {discoverNumerosPrimosEnRecursion} from './app/numerosPrimos'
import {ejemploPromise1} from './app/ejemplosPromise'
import serverHTTP from './httpapp/server'
import clienteHTTP from './httpcliente/index'
import {consultarTableNumerosPrimos} from './lib/manejadorSQL'
import levantarArchivos from './app/levantarArchivos'
import {contar} from './ejercicios/omar/collatz1'
import {pruebaMongo, levantarArchivos as levantarArchivosMongo, genClientesRandom} from './app/pruebaMongo'
import pruebaPasswords from './app/pruebaPasswords'
import {crearJWT} from './lib/jwt/creador'
import {verificarToken} from './lib/jwt/verificador'
import { leerToken } from './lib/jwt/sololectura'
import servidorsito from './httpapp/servidorsito'
import {ejecutarProcesoExterno, ejemploStdIn} from './app/ejemplos/childProcess'
import pruebaLogger from './app/ejemplos/pruebaLogger'
import { Producer } from 'kafkajs'
import { producer, producirNumeros } from './kafka/producer'
import { initConsumer } from './kafka/consumer'

switch (process.argv[2]) {
    case 'creararchivos':
        crearArchivos()
        break
    case 'discoverNumerosPrimos':
        discoverNumerosPrimosEnRecursion()
        break
    case 'probar':
        consultarTableNumerosPrimos((err, data) => {
            console.log(data)
        })
        break
    case 'server':
        serverHTTP()
        break
    case 'cliente':
        clienteHTTP()
        break
    case 'levantararchivos':
        levantarArchivos()
        break
    case 'levantararchivosmongo':
        levantarArchivosMongo()
        break
    case 'collatz':
        contar(7)
        break
    case 'pruebamongo':
        pruebaMongo()
        break
    case 'pruebapasswords':
        pruebaPasswords()
        break
    case 'crearjwt':
        crearJWT('unID', 'andy')
        break
    case 'verificarjwt':
        verificarToken(process.argv[3])
        break
    case 'leerjwt':
        leerToken(process.argv[3])
        break
    case 'servidorsito':
        servidorsito(parseInt(process.argv[3]))
        break
    case 'childprocess':
        // ejecutarProcesoExterno()
        ejemploStdIn()
        break
    case 'pruebalog':
        pruebaLogger()
        break
    case 'crearclientesmongo':
        genClientesRandom()
        break
    case 'producer':
        producirNumeros()
        break;
    case 'consumer':
        initConsumer()
        break
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}



