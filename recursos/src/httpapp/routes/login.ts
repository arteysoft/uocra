import express from 'express'
import {v4 as uuid} from 'uuid'
import {crearJWT} from '../../lib/jwt/creador'
import {crearUsuario, validarUsuario, crearToken, validarToken} from '../../lib/manejadorSQLUsuarios'

export default express.Router()
    .use('', (request, response, next) => {
        console.log('Pasando por el middleware de hola')
        next()
    })
    .get('', (request, response) => {
        response.status(200).send({saludo:'hola'})
    })
    .get('', (request, response) => {})
    .post('', async (request, response) => {
        // evaluar el body 
        console.log(request.body)

        try {
            let idUsuario = await validarUsuario(request.body.usuario, request.body.password)
            response.status(200).send({token: crearJWT(idUsuario, request.body.usuario)})
        }
        catch (err) {
            response.status(401).end()
        }
    })
    .put('', (request, response) => {})
    .delete('', (request, response) => {})

