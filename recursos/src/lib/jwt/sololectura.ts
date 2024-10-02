// const jwtdecode = require('jwt-decode')
import jwt, {TokenExpiredError, JsonWebTokenError} from 'jsonwebtoken'

export let leerToken = (token) => {
    let decoded = jwt.decode(token)
    console.log(decoded)
}