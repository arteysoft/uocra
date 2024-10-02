// const readline = require('readline')

/*
let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('')

interfazCaptura.question(' Ingrese un numero: ', (respuesta)=> {
  interfazCaptura.close()
  respuesta < 1 ? console.log ('Debe ingresar un numero positivo ! !') : contar(respuesta)
})
*/

//////////////////////////////////////////////////////////////////////////////////

let esPar = z => (z % 2) === 0
let esImpar = z => esPar(z) === false

let fn3nMas1 = n => esPar(n) ?  n/2 : ((n*3) + 1)

function collatz(numero){
  numero = (numero%2) === 0  ?  numero/2 : numero*3 + 1
  return numero
} 

export function contar(numEvaluar) {
  for (let i = 1 ; numEvaluar != 1; i++) {
    numEvaluar = collatz(numEvaluar)
    console.log(` ${i}  *   Collatz Nro: ${numEvaluar}  `)
    console.log('-----------------------------------------')  
  }
}

