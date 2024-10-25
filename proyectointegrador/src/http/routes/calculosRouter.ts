import express from 'express'

import { forEver } from '../../cortesListon/main'

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
    .post('/cortes', async (request, response) => {
        console.log(request.body)
        console.log(request.body.cortes)

        let solucion = forEver(request.body.cortes)

        try {
            response            
            .status(200)
            .send(JSON.stringify({tuSolucion:solucion}))
        }
        catch(err) {
            response            
            .status(500)
            .send()
        }
    })