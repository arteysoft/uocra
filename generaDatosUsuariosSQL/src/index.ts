import 'dotenv/config'
import crearObjetoFake from './genusuario'
import { cerrarConexion, crearConexion, query } from './driverPromise'

let fnInit = async () => {
    let conn = crearConexion()
    let sql = "INSERT INTO usuarios values (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    
    for (let idx = 0; idx < 100000; idx++) {
        console.log(idx)
        let xsIns = Object.values(crearObjetoFake())
        await query(conn, sql, xsIns)
    }
    await cerrarConexion(conn)
}

fnInit()
    .then()
    .catch()




