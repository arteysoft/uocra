let uuid = require('uuid')
let generarUsuario = require('./generarusuario')

for (let idx = 0; idx < 10; idx++) {
    console.log(uuid.v4())
}

console.log(generarUsuario())