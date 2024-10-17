export let hola = () => {
    
}

export default () => {
    let str:string = "un string implicito"
    let unbool:boolean = true

    let unObjeto = {
        primerNombre: "azulcita",
        age: 25
    }

    let arr:Array<number> = [2, 3, 4, 0]
    let arr2:number[] = []

    let suma = (num1:number, num2:number) => {
        return num1 + num2
    }

    let r = suma(55, 3)
    console.log(typeof r)
    console.log(r)

    let ap = process.env["PROCESSOR_ARCHITECTURE"]
    let pass = process.env["PASSWORD"]


    let eliminarUndefined = (x:string|undefined):string => {
        if (typeof x === "undefined") {
            throw new Error('no puede ser undefined')
        }
        return x
    }

    let problema = (st:string) => {
        console.log("tengo un happy string", st)
    }

    problema(eliminarUndefined(pass))

    ////////// Interfaces y tipos

    interface ImiInterfaz {
        numero:number,
        funcion: (a:string, b:number) => number
    }

    let dato:ImiInterfaz = {
        numero: 2,
        funcion: (a, b) => {
            return 0
        }
    }

    interface Errores {
        [key:string]:string;
    }

    let mensajesError:Errores = {
        "DISCO" : "error en el disco",
        "RED": "error de red",
        "CONSOLA": "error en consola"
    }

    mensajesError["DISCO"] = "error en el disco"

}

