import 'dotenv/config'
import crearObjetoFake from './genusuario'
import { crearConexion, query } from './driverPromise'

/*
let fnSeleccionChoferes = async () => {
    let conn = crearConexion()   
    let sqlSelect = "SELECT * FROM choferes"
    let resultSet = await query(conn, sqlSelect, [0])    
    await cerrarConexion(conn)
    return resultSet
}


fnSeleccionChoferes()
.then(resultSet => {
    let nombres = filtrador(resultSet, z => z.cantidad_de_accidentes === 4)
    console.log(nombres)
    nombres = filtrador(resultSet, z => !z.le_gusta_su_trabajo && z.cantidad_de_accidentes > 0)
    console.log(nombres)
    let unArray = convertirArray(resultSet)

    // cual es la ventaja de usar map, filter, reduce
    
    nombres = unArray
                .filter(z => !z.le_gusta_su_trabajo)
                .filter(z =>  z.cantidad_de_accidentes > 0)
                .map(z => z.nombre)
    
    console.log(nombres)

    unArray
                .filter(z => !z.le_gusta_su_trabajo)                
                .forEach(z => console.log(z.nombre))
    
})
.catch(e => {
    console.log(e)
})

// Que es un criterio de inclusion, es un predicado
// funcion recibe x y retorna true, false
// funcion que recibe registro de la tabla chofer -> true, false

let filtrador = (resultSet, predicado:(x:any)=>boolean) => {
    let nombres:any[] = []

    for (let item of resultSet) {
        if (predicado(item)) {
            nombres.push(item.nombre)
        }
    }
    return nombres
}

let convertirArray = (resultSet) => {
    let nombres:any[] = []

    for (let item of resultSet) {
        nombres.push(item)
    }
    return nombres
}
*/

/*
En vez de llamar a fnInit, quiero que hagan un select sobre la tabla
usuarios con un where que tengo nombre = 'Andy' y ammount > 1


*/