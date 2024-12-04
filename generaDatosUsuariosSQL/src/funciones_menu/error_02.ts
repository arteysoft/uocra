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

let fnInit = async ():Promise<string> => {    
    console.log('Camino normal I')
    await funcionInterna(false, 2, 3)
    console.log('Camino normal II')
    return "Camino exception al "
}    

fnInit()
.then(resultadoAnterior => {
    console.log(resultadoAnterior)
    return 1
})
.then(resultadoAnterior => {
    return resultadoAnterior + 1
})
.then(resultadoAnterior => {
    console.log('ULTIMO ESLABON DE LA CASCADA')
    console.log(resultadoAnterior)
    console.log('ULTIMO ESLABON DE LA CASCADA')
})
.catch(err => {
    console.log('Entro x el catch')
    console.log([err.name, err.message].join(': '))            
})
.finally(() => {
    console.log('termina en finally ya sea camino normal o exception')
})