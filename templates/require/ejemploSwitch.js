let randomizadorPPT = require('./randomizadorPPT')

module.exports = () => {    
    console.log('voy a mostrar como se usa un switch')
    
    let subindice = randomizadorPPT()
    console.log(subindice)

    switch (subindice) {
        case 0:
            console.log('Piedra')
            break
        case 1:
            console.log('Papel')
            break
        case 2:
            console.log('Tijera')
            break
        default:
            console.log('Error')
            throw new Error('NO PUEDO CONTINUAR DEBE SER 0,1,2')
    }
}
