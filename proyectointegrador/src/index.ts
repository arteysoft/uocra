import 'dotenv/config'
import crearUsuariosRandom from './crearUsuariosRandom/main'
import crearImpuestoSobreUsuarios from './crearImpuestoSobreUsuarios/main'
import {corteListon} from './cortesListon/main'
import test_liston from './cortesListon/testeo'

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
    case 'test':        

        break
    case 'cliente':        
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



