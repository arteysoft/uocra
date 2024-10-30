import express from 'express'
const path = require('path');
import datosRouter  from './routes/datosRouter'
import calculosRouter from './routes/calculosRouter';

export default () => {

    console.log('Levantando servidor HTTP')
    let app = express()

    app.use(express.json());
    app.use(express.static(
        path.join(__dirname, '../../public')));

    app.use('/api/datos', datosRouter)
    app.use('/api/calculos', calculosRouter)

    app.get("/hola", (req, res) => {
        res.send("hola").end()
    })

    app.listen(3000, () => {
        console.log('escuchando puerto 3000')
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

let strArr:string[] = ["12", "23", "48"]
let floatArr:number[] = strArr.map(z => parseFloat(z))

if (floatArr.every(z => isNaN(z) === false)) {
    console.log('ok')
}
else {
    console.log('NOT OK')
}