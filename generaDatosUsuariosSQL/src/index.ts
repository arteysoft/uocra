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

let fnSeleccionChoferes = async () => {
    let conn = crearConexion()   
    let sqlSelect = "SELECT * FROM choferes WHERE cantidad_de_accidentes > ?"
    let resultSet = await query(conn, sqlSelect, [0])
    console.log(resultSet)
    await cerrarConexion(conn)
}

/*
La tarea es: desde SQL diferenciar aquellos que les gusta su trabajo
y los que no

Una vez hecho eso ? cambiamos y lo hacemos con filter en javascript
traemos todo y lo filtramos en nuestro host
*/



fnSeleccionChoferes()
.then()
.catch()



