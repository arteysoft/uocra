import express from 'express'
import {insertOne, query as queryMongo} from '../../lib/driverMongo'
import {MongoServerError, MongoServerSelectionError} from 'mongodb'
import genUsuario from '../../lib/genusuario'

export default express.Router()
    .use('', (request, response, next) => {
        console.log('Pasando por el middleware de hola')
        next()
    })
    .get('/inventar', (request, response) => {
        response            
            .status(200)
            .send(genUsuario())
    })
    .get('/:id', async (request, response) => {
        console.log(request.params.id)

        try {
            let res = await queryMongo('clientes', {id:request.params.id})
            if (res.length === 0) {
                response            
                .status(404)
                .send()
                return
            }
            response            
            .status(200)
            .send(res[0])
        }
        catch(err) {
            response            
            .status(500)
            .send()
        }
    })
    .post('', (request, response) => {
        console.log(request.body)

        insertOne('clientes', request.body)
        .then(() => {
            response            
                .status(201)
                .send()
        })
        .catch(err => {
            console.log(err)

            if (err instanceof MongoServerError) {
                response
                .status(400)
                .send()
                return
            }

            if (err instanceof MongoServerSelectionError) {
                response            
                .status(500)
                .send()
                return
            }

            response            
                .status(500)
                .send()
        })
    })
    .put('/:id', (request, response) => {
        /* Puede ser 404 no existe
            Puede ser 200 que se modifico
        */
            console.log(request.params.id)

            response            
            .status(404)
            .send()
    })
    .delete('/:id', (request, response) => {
        console.log(request.params.id)

            response            
            .status(404)
            .send()
    })

