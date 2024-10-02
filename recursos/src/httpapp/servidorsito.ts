import express from 'express'

export default (puerto) => {

  let app = express()

  app.get('/', (req, res) => {
    let respuesta = {
        url: req.hostname,
        port: puerto
    }
    res            
        .status(200)
        .send(respuesta)
  })
  
  app.listen(puerto, () => {
    console.log(`\nServidor escuchando el puerto: ${puerto}`)
  })
}                            