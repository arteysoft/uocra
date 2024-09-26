let genUsu = require('./generarusuario')


let generarMilUsuarios = () => {
    let arrUsuarios = []

    for (let idx=1; idx <= 1000; idx++) {
        arrUsuarios.push(genUsu())
    }

    return arrUsuarios
}

let convertiraJson_pura = (obj) => {
    return JSON.stringify(obj, null, 4)
}

let visualizarUsuarios = (usuarios) => {
    for (let item of usuarios) {
        console.log(convertiraJson_pura(item))
    }
}

module.exports = () => {        
    let xs = generarMilUsuarios()
    visualizarUsuarios(xs)    
}
