import express from 'express'

export default () => {

    console.log('Levantando servidor HTTP')
    let app = express()

    app.listen(80, () => {
        console.log('escuchando puerto 3000')
    })

    /*
    logger.info('levantando express')
    
    app.use(express.static(path.join(__dirname, '../../public')));

    // app.use(express.json());
    // app.use('/api/login', loginMiddleware)
    app.use('/api/datos', datosRouter)
    // app.use('/api/alumno', alumnoRouter)
    // app.use(autenticacionRouter())

    
    */
}