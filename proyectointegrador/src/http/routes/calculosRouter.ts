import express from 'express'

export default express.Router()    
    .post('/sumar', async (request, response) => {

        console.log(request.body)

        const total = request.body.x + request.body.y

        try {
            response            
            .status(200)
            .send(JSON.stringify({total}))
        }
        catch(err) {
            response            
            .status(500)
            .send()
        }
    })
    .post('/ipc', async (request, response) => {

        console.log(request.body)

        let total = request.body.xs.reduce((zacum, z) => {
            let i = z / 100
            return zacum += (zacum * i)
        }, 100)

        total = total - 100

        try {
            response            
            .status(200)
            .send(JSON.stringify({inflacionTrimestral:total}))
        }
        catch(err) {
            response            
            .status(500)
            .send()
        }
    })