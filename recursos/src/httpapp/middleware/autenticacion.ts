import express from 'express'
import {verificarToken, obtenerSuscriber} from '../../lib/jwt/verificador'

export default () => (request, response, next) => {
    console.log('ACA HABRIA QUE CHEQUEAR SI VIENE UN TOKEN Y SI NO VIENE VA 401 o 403')
    if (request.headers['x-token'] === undefined) {
        response.status(401).send()
        return
    }

    try {
        let token = request.headers['x-token']
        if (verificarToken(token)) {
            request.miNumeroDeSuscriber = obtenerSuscriber(token)
            console.log('nro de suscriber: ', request.miNumeroDeSuscriber)
            next()
            return
        }
    }
    catch (err) {

    }    
    response.status(401).send()
}