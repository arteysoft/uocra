import fs from 'fs/promises'
import mysql2prom, {Connection} from 'mysql2/promise'

let insertarAlumno = async (alumno) => {
    let tmplSQL = 'INSERT INTO clientes (id, firstName, lastName, city, streetName, country, accountName, account, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    
    let connection = await mysql2prom.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'breakingnode'
    })

    await connection.query(tmplSQL, [
        alumno.id,
        alumno.firstName,
        alumno.lastName,
        alumno.city,
        alumno.streetName,
        alumno.country,
        alumno.accountName,
        alumno.account,
        alumno.amount,
    ])

    await connection.end()
}


let checkStr = (x:string|undefined):string => {
    if (x === undefined) {
        throw new Error('El parametro, no puede ser undefined')
    }
    return x
}

export default async () => {

    let archivos = await fs.readdir(checkStr(process.env.PATH_UBICACION_ARCHIVOS_OUTPUT))
    console.log(archivos)    
    for (let unArchivo of archivos) {
        let fullPath = [checkStr(process.env.PATH_UBICACION_ARCHIVOS_OUTPUT), unArchivo].join('/')
        console.log(fullPath)
        let contenidoPlano = await fs.readFile(fullPath, 'utf-8')
        let contenidoJson = JSON.parse(contenidoPlano)
        await insertarAlumno(contenidoJson)
        console.log(contenidoJson)
        await fs.unlink(fullPath)
    }
}