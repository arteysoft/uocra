module.exports = () => {

    let validarQueSeanNumero = n => {
        if (typeof n === 'number'){
            return true
        } else {
            return false
        }
    }

    let arr = [3, 'a', 6, 't']

    arr.every(z => validarQueSeanNumero(z))

    let resultado = arr.every(validarQueSeanNumero)

    console.log(resultado ? "Son todos numeros" : "NO son todos numeros")

    arr.some(z => validarQueSeanNumero(z))

    resultado = arr.some(z => validarQueSeanNumero(z))

    console.log(resultado ? "Que algunos son numeros" : "Ninguno es numero")

    arr.map(validarQueSeanNumero)

    resultado = arr.map(validarQueSeanNumero)

    console.log(resultado)

}