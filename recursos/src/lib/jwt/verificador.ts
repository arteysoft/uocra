import {SECRETO, hora} from './commons'
import jwt, {TokenExpiredError, JsonWebTokenError, JwtPayload} from 'jsonwebtoken'

let transformarTipo = (n:null | JwtPayload | string):string => {
    if (n === null) {
        throw new Error('Atencion, no puede ser null')
    }
    return ""
}

export let obtenerSuscriber = (token) => {
    try {
        let tokenObj:any = jwt.decode(token)
        console.log(tokenObj)
        return tokenObj.sub
    }
    catch (err) {
        throw new Error('No se pudo obtener el suscriber')
    }
}

export let verificarToken = (token):boolean => {
    try {
        jwt.verify(token, SECRETO)
    }
    catch (err) {
        if (err instanceof TokenExpiredError) {
            console.log('El token esta expirado')
            return false
        }
        if (err instanceof JsonWebTokenError) {
            console.log('el token no esta correctamente formateado')
            return false
        }
    }
    return true
}