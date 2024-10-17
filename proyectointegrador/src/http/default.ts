import express from 'express'
const path = require('path');
import datosRouter  from './routes/datosRouter'

export default () => {

    console.log('Levantando servidor HTTP')
    let app = express()

    console.log(path.join(__dirname, '../../public'))

    app.use(express.static(
        path.join(__dirname, '../../public')));

    app.use('/api/datos', datosRouter)

    app.get("/hola", (req, res) => {
        res.send("hola").end()
    })

    app.listen(80, () => {
        console.log('escuchando puerto 80')
    })

    /*
    logger.info('levantando express')
    
    

    // app.use(express.json());
    // app.use('/api/login', loginMiddleware)
    app.use('/api/datos', datosRouter)
    // app.use('/api/alumno', alumnoRouter)
    // app.use(autenticacionRouter())

    
    */
}