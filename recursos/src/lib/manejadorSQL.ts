import * as todoElDriver from 'mysql2'

export let consultarTableNumerosPrimos = onFinish => {
    let connection = todoElDriver.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'breakingnode'
    })

    connection.connect(err => {
        if (err) {
            onFinish(err)
            return
        }
    
        connection.query('SELECT fecha, numero FROM numerosprimos ', (err, results, fields) => {
            if (err) {
                onFinish(err)
                return
            }
            
            connection.end(err => {
                if (err) {
                    onFinish(err)
                    return
                }
                onFinish(null, results)
            })
        })
    })
}

export let insertarNumeroPrimoSQL = (nuevoNumero, onFinish) => {

    setTimeout(() => {
        onFinish(null)
    }, 30)

    let connection = todoElDriver.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'breakingnode'
    })

    console.log('connect', nuevoNumero)
    connection.connect(err => {
        if (err) {
            onFinish(err)
            return
        }
    
        console.log('query', nuevoNumero)
        connection.query('INSERT INTO numerosprimos (fecha, numero) VALUES (CURRENT_TIMESTAMP(), ?)', nuevoNumero, err => {
            if (err) {
                onFinish(err)
                return
            }
            console.log('end', nuevoNumero)
            connection.end(err => {
                console.log('termina el callback de end', nuevoNumero)
                if (err) {
                    onFinish(err)
                    return
                }
                onFinish(null)
            })
        })
    })
}


