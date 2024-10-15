
export let leyendoarchivos = (obtenerContArchivo) => {    
    let strnumeros = obtenerContArchivo()

    let arrNumeros = strnumeros.split(' ')
    let objetoSinRepetidos = {}

    arrNumeros.forEach(function (elemento){
        objetoSinRepetidos[elemento] = elemento
    })

    let numerosSinRepetir = Object.values(objetoSinRepetidos)
    return numerosSinRepetir
}
