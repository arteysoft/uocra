import * as todoElDriver from 'mysql2'

export let crearConexion = () => { 
    return todoElDriver.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'uocra'
    })
}

export let cerrarConexion = async (connection) => {
    return new Promise((resolve, reject) => {
        connection.end(err => {
            if (err) {
                reject(err)
                return
            }
            resolve(null)
        })
    })
}

export let connect = (connection) => {
    return new Promise((resolve, reject) => {
        connection.connect(err => {
            if (err) {
                reject(err)
                return
            }
            resolve(null)
        })
    })
}

export let query = async (connection, strSQL, arrValues:(string | number)[] = []) => {
    return new Promise((resolve, reject) => {
        connection.query(strSQL, arrValues, (err, resultset:any[]) => {
            if (err) {
                reject(err)
                return
            }
            resolve(resultset)
        })
    })
}

export let insert = query