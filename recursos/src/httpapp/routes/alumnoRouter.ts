import express from 'express'
import genUsuario from '../../lib/genusuario'
import {insertOne, query, updateOne, deleteOne} from '../../lib/driverMongo'
import {encolar} from '../../kafka/producer'

const NOMBRE_COLECCION = 'alumnos'

export default express.Router()
    .use('/', (request, response, next) => {
        next()
    })
    .get('/inventar', (request, response) => {
        let usu = genUsuario()
        
        response
            .status(200)            
            .send(usu)
    })
    .get('/', (request, response) => {
        console.log(request.query)

        query(NOMBRE_COLECCION, request.query)
        .then(z => {
            console.log(z)
            response.status(200).send(z)
        })
        .catch(z => {
            response.status(500).send()
        })
    })
    .get('/:id', (request, response) => {
        let id = request.params.id

        query(NOMBRE_COLECCION, {id})
        .then(z => {
            console.log(z)
            if (z.length === 0) {
                response.status(404).send()
                return
            }            
            response.status(200).send(z)
        })
        .catch(z => {
            response.status(500).send()
        })
    })
    .post('', (request, response) => {
        /*
        console.log(request.body)
        insertOne(NOMBRE_COLECCION, request.body)
            .then(() => {
                response.status(201).send()
            })
            .catch(() => {
                response.status(500).send()
            })
        */
       encolar(request.body)
        .then(() => {
            response.status(201).send()
        })
        .catch(() => {
            response.status(500).send()
        })
            
    })
    .put('/:id', async (request, response) => {
        let id = request.params.id

        try {
            let resp = await updateOne(NOMBRE_COLECCION, id, request.body)
            response.status(200).send()
        }
        catch {
            response.status(500).send()
        }
    })
    .delete('/:id', async (request, response) => {        
        try {
            let id = request.params.id

            let resp = await deleteOne(NOMBRE_COLECCION, id)
            response.status(200).send()
        }
        catch {
            response.status(500).send()
        }
    })

