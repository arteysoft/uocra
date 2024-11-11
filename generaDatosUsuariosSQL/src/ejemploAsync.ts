/*
Como ir del callback hell a las promises
*/

// Parte 1

let ejecutarDentroDe3Segundos = (fn) => {
    setTimeout(fn, 3000)
}  

console.log('Arranca a contar el tiempo ...')
ejecutarDentroDe3Segundos(() => {
    console.log('termino la llamada a la funcion ...')
    // Aca van a llamar nuevamente a ejecutarDentroDe3Segundos
})