import express from 'express'
import {insertOne, query as queryMongo} from '../../lib/driverMongo'
import {MongoServerError, MongoServerSelectionError} from 'mongodb'
import genUsuario from '../../lib/genusuario'


// Gaussian (Normal) Distribution Formula
function gaussian(x, mean, standardDeviation) {
    const exponent = -((x - mean) ** 2) / (2 * standardDeviation ** 2);
    const coefficient = 1 / (standardDeviation * Math.sqrt(2 * Math.PI));
    return coefficient * Math.exp(exponent);
}

/*
// Example usage
const mean = 0;  // Mean (μ)
const standardDeviation = 1;  // Standard deviation (σ)

const x = 1;  // Example input value
const result = gaussian(x, mean, standardDeviation);
*/


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
    .get('/callvolatilidad', (request, response) => {
        response            
            .status(200)
            .send(genUsuario())
    })
    .get('/putvolatilidad', (request, response) => {
        response            
            .status(200)
            .send(genUsuario())
    })
    .get('/:id', async (request, response) => {
        console.log(request.params.id)

        let datos:number[] = []
        for (let idx = 1; idx <= 10; idx++) {
            let newData = gaussian(idx, 5, 1.20) + 1
            newData = Math.round(newData * 1000)
            console.log(newData)
            datos.push(newData)
        }

        try {
            response            
            .status(200)
            .send(datos)
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

