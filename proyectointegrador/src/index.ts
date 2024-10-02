import 'dotenv/config'
import crearUsuariosRandom from './crearUsuariosRandom/main'
import crearImpuestoSobreUsuarios from './crearImpuestoSobreUsuarios/main'

switch (process.argv[2]) {
    case 'crearUsuariosRandom':
        crearUsuariosRandom()
        break
    case 'crearImpuestoSobreUsuarios':
        crearImpuestoSobreUsuarios()
        break        
    case 'probar':
        console.log('Entro aca')
        break
    case 'cortesListon':
        console.log('agregar proyecto integrador parte 1')
        break
    case 'server':
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



