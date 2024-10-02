import * as fs from 'fs'

export let ejemploPromise1 = () => {

    let unaFuncionAsincronica = (numero:any) => {
        return new Promise<number>((resolve, reject) => {
            let pathArch = ['/var/arch/', 'paraprobarpromise', '.txt'].join('')
            fs.writeFile(pathArch, numero.toString(), 'utf-8', err => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(numero)
            })
        })
        
    }

    let unaFuncionSincronica = (numero) => {
        console.log(numero)
    }


    unaFuncionAsincronica(1000)
    .then(z => { 
        console.log('Todo OK: ', z)
        return z
    })
    .then(z => {
        console.log('Sigue la cascada', z)
        // throw new Error('EL PASO 2 SE JUE ALA M')
        return z + 1
    })
    .then(z => {
        console.log(z)        
        return unaFuncionAsincronica(z + 1)        
    })
    .then(z => {
        console.log('Sigue la cascada 2', z)
        return z
    })
    .then(z => {
        console.log(z)        
        return unaFuncionAsincronica(z + 1)        
    })    
    .then(z => {
        console.log('ULTIMO PASO SIN RETURN', z)
    })
    .catch(err => {
        console.log('Cuidado que estoy saliendo por el catch')
        console.log(err) 
    })
}