import 'dotenv/config'
import crearObjetoFake from './genusuario'
import { crearConexion, query } from './driverPromise'

let fnInit = async (cant) => {
    let conn = await crearConexion()
    let sql = "INSERT INTO usuarios values (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    
    for (let idx = 0; idx < cant; idx++) {
        console.log(idx)
        let xsIns = Object.values(crearObjetoFake())
        await query(conn, sql, xsIns)
    }
    conn.end()
}

fnInit(100000)

