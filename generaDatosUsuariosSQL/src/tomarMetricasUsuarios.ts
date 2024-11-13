import 'dotenv/config'
import { crearConexion, query } from './driverPromise'

let fnInit = async () => {
    let conn = await crearConexion()
    let sql = "SELECT usuarios WHERE firstName = ?"
    await query(conn, sql, ['Andy'])
    conn.end()
}

fnInit()