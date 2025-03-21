import 'dotenv/config'
import fs from 'fs'
import crearUsuariosRandom from './crearUsuariosRandom/main'
import crearImpuestoSobreUsuarios from './crearImpuestoSobreUsuarios/main'
import {corteListon} from './cortesListon/main'
import test_liston from './cortesListon/testeo'
import { leyendoarchivos } from './ok/leertxt'
import {hola} from './usodets'
import eldefault from './usodets'
import httpserver from './http/default'

switch (process.argv[2]) {
    case 'crearUsuariosRandom':
        crearUsuariosRandom()
        break
    case 'crearImpuestoSobreUsuarios':
        crearImpuestoSobreUsuarios()
        break        
    case 'testeo':
        test_liston()
        break
    case 'cortesListon':
        corteListon()
        break
    case 'leerarchivos':
        {
            let path = 'C:/uocra/proyectointegrador/src/ok/ok.txt'
            let res = leyendoarchivos(() => 
                // "20 10 15 10 101"
                fs.readFileSync(path,'utf-8')
                )
            console.log(res)
        }
        
        break
    case 'ts':        
        hola()
        eldefault()
        break
    case 'http':
        httpserver()
        break
    case 'levantararchivos':        
        break
    case 'levantararchivosmongo':        
        break
    case 'collatz':        
        break
    case 'pruebamongo':        
        break
    case 'pruebapasswords':        
        break
    case 'crearjwt':        
        break
    case 'verificarjwt':        
        break
    case 'leerjwt':        
        break
    case 'servidorsito':        
        break
    case 'pruebalog':        
        break
    case 'crearclientesmongo':        
        break    
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}

