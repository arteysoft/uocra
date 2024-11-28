import 'dotenv/config'
let readLine = require('node:readline')
let fs = require('fs/promises')

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

let ingresarNumero = async (arrNumber:Array<any>) => {
    /* como hago para validar q sea un numero
    y q este adentro del array. parseInt lo usamos */
    let x = await leerLineaPromise()  
    let xInt = parseInt (x)
    if (Number.isNaN(xInt)) {
        throw new Error('El numero ingresado no es un numero ')
    }    
    if (arrNumber.some(z => z === xInt) === false) {
        throw 'El numero ingresado ' + xInt + ', no esta dentro del array ' + arrNumber.join()
    }
    return arrNumber.indexOf(xInt)
}

let vamosAleer2veces = async () => {    
    for (;;)     {
        let dos = await leerLineaPromise()
        console.log([dos])
    }
}

// vamosAleer2veces()

let menu = async (estructuraMenu:Array<any>) => {    
    
    let PUNTERO_ITEM_MENU_ACTUAL = 0


    let salir = false
    while (!salir) {
        try {            
            let objConfigActual = estructuraMenu[PUNTERO_ITEM_MENU_ACTUAL]
            console.log(objConfigActual)
            console.log(objConfigActual.strOpciones.join('\n'))
            let opcionesValidas = objConfigActual.opciones
            console.log("Ingrese " + opcionesValidas.join())
            let opcionElegida = await ingresarNumero (opcionesValidas)
            console.log(objConfigActual.tipoTarget[opcionElegida])
            switch (objConfigActual.tipoTarget[opcionElegida]) {
                case 'menu': {
                    let opcElegida = objConfigActual.target[opcionElegida]
                    console.log('proximo nombre de nodo: ', opcElegida)
                    let posOpcionElegida = estructuraMenu.filter(z => z.nombre === opcElegida)
                    console.log(posOpcionElegida)
                    }
                    break                       
                case  "salir":
                    salir = true
                    break
                default:
                    console.log('GUARDA QUE ENTRO POR ACA !!!!')
                    break
            }

            
            
        }
        catch (err) {
            console.log(err)            
            console.log()
        }
    }
}

let leerConfiguracionMenu = async ():Promise<Object[]> => {
    let rutaArchivo = process.env["PATH_ARCHIVO_CFG_MENU"]    
    let contenidoConfStr = await fs.readFile(rutaArchivo, { encoding: 'utf-8'})    
    let objConfiguracionMenu = JSON.parse(contenidoConfStr)

    return objConfiguracionMenu
}


{   
    /*
    let f2 = () =>{
        console.log("Soy 2")
    }
    let f4 = () =>{
        console.log("Soy 4")
    }
    let f6 = () =>{
        console.log("Soy 6")
    }
    */

    leerConfiguracionMenu().then(cfg => menu(cfg))
    .catch(err => console.log(err))    
}




