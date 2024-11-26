import 'dotenv/config'
let readLine = require('node:readline')

type soloInputString = () => Promise<string>

let leerLineaPromise:soloInputString = async () => {
    const readlineInterface = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })

    return new Promise((resolver, recharzar) => {
        readlineInterface.on('line', laLineaIngresada => {                  
            console.log(laLineaIngresada)
            resolver(laLineaIngresada)
            readlineInterface.close()
        })
    });
}

let ingresarNumero = async (arrNumber:Array<number>) => {
    /* como hago para validar q sea un numero
    y q este adentro del array. parseInt lo usamos */
    let x = await leerLineaPromise()  
    let xInt = parseInt (x)
    if (Number.isNaN(xInt)) {
        throw new Error('El numero ingresado no es un numero ')
    }    
    if (arrNumber.some(z => z === xInt) === false) {
        throw new Error('El numero ingresado' + xInt + ',no esta dentro del array ' + arrNumber.join())
    }
    return xInt
}

let vamosAleer2veces = async () => {    
    for (;;)     {
        let dos = await leerLineaPromise()
        console.log([dos])
    }
}

// vamosAleer2veces()

let menu = async (opcionesValidas:Array<number>) => {    
    /*
    Vamos a realizar nuestra propuesta
    Supongamos que tenemos muchos menues.

    Se hacer una funcion que yo la llamo y me muestre un menu
    y que al yo presionar una opcion realize una tarea ?

    El tema es que si, utilizamos la aproximacion de abajo ?
    Me quedo con una funcion concreta NO reutilizable

    */
    let salir = false
    while (!salir) {
        try {
            console.log("Ingrese " + opcionesValidas.join())
            let opcionElegida = await ingresarNumero (opcionesValidas)
            switch (opcionElegida) {
                case 1:
                    console.log('ir a pedir datos de la sucursal')
                    break
                case 2:
                    console.log('salir')
                    salir = true
                    break
                case 3:
                    break
            }
        }
        catch (err) {
            console.log(err)
            console.log('debe ingresar ' + opcionesValidas.join())
        }
    }
}

menu([1, 2, 3, 4])