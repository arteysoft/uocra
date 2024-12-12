import 'dotenv/config'
import crearObjetoFake from './genusuario'
import { crearConexion, query } from './driverPromise'
import mysqlProm, {Connection} from 'mysql2/promise'

let fnInit = async () => {
    let conn:Connection = await crearConexion()

    try {
        await conn.beginTransaction()

        let sqlAcreedor = "UPDATE acreedor SET saldo = saldo - ?"
        let sqlDeudor = "UPDATE deudor SET saldo = saldo + ?"

        await conn.query(sqlAcreedor, [1])
        await conn.query(sqlDeudor, [1])

        await conn.commit()        
    }
    catch (err) {        
        if (err instanceof Error) {
            console.log(err.message)
        }
        await conn.rollback()
    }
    finally {
        try { await conn.end() } catch (err) {}
    }
}

fnInit()