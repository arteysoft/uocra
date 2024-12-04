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

let fnInit = async () => {
    try {
        console.log('Camino normal I')
        await funcionInterna(true, 2, 3)
        console.log('Camino normal II')
    }
    catch (err) {        
        console.log("Camino exception al ")
        if (err instanceof Error) {
            console.log([err.name, err.message].join(': '))            
        }
    }    
    finally {
        console.log('termina en finally ya sea camino normal o exception')
    }
}

fnInit()