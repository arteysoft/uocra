import {v4 as uuid} from 'uuid'
import * as crypto from 'crypto';

var hash = crypto.createHash('sha256');

var code = 'bacon';

code = hash.update(code);
code = hash.digest(code);

console.log(code);

let sha256 = (salt, clearPassword) => {
    return [salt, clearPassword].join('')
    // aplicarle el sha2
}

let crearUsuario = (nombreUsuario, clearPassword) => {
    uuid() // este es el id del usuario
    nombreUsuario // deberia ser unique
    let salt = [uuid(), uuid()].join()
    let passwordEncriptada = sha256(salt, clearPassword)

    // Insert id, nombreUsuario, salt, passwordEncriptada

    /*
    const { createHash } = require('crypto');
    createHash('sha256').update('bacon').digest('hex');
    */
}

let validarUsuario = (nombreUsuario, clearPassword) => {
    // levantar con un select where nombreusuario = nombreusuario
    let passwordEncriptada = sha256(salt, clearPassword)

    if (passwordEncriptada === 'la de la base') {
        return true
    }
    return false
}