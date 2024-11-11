import * as todoElDriver from 'mysql2/promise'

export let crearConexion = async ():Promise<todoElDriver.Connection> => { 

    let config:todoElDriver.ConnectionOptions = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'uocra'
    }

    return todoElDriver.createConnection(config)
}

export let query = async (
        connection:todoElDriver.Connection, 
        strSQL:string, 
        arrValues:(string | number)[]
        ):
        Promise<[todoElDriver.QueryResult, todoElDriver.FieldPacket[]]> => {
         
        return await connection.query(strSQL, arrValues)    
}

let fn = async (
            a:number, 
            b:number, 
            c: string, 
            d: string):
            Promise<[number, string]> => { 

    return [a + b , d.concat(c)]
}

export let insert = query