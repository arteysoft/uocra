/*
Dado un array de objetos que tiene una key
cortes que es un array
Todos los key cortes, deben tener la misma longitud
y sus valores se debe renellar con zeros a la derecha
*/

let estrucutraOriginal = JSON.parse('[{"cortes":[180,20,69,10,111],"liston":420,"desperdicio":7.1},{"cortes":[290],"liston":300,"desperdicio":3.3},{"cortes":[15,15,45,160,14,154],"liston":420,"desperdicio":4},{"cortes":[20,85,35,50,25,85],"liston":300,"desperdicio":0},{"cortes":[13,85,200],"liston":300,"desperdicio":0.7},{"cortes":[288,120],"liston":420,"desperdicio":2.9}]')

/*
Primero tenemos que buscar que liston tiene mas cantidad de cortes
*/

export let adaptandoFormatoApi = (estrucutraOriginal) => {
    let listoConMasCortes = estrucutraOriginal.reduce((acum,item) => {
        if (acum > item.cortes.length){
            return acum
        } else {
            return item.cortes.length
        }},0)
    
    estrucutraOriginal.forEach(item => {
        let diferencia = listoConMasCortes - item.cortes.length
        item.cortes = item.cortes.concat(new Array(diferencia).fill(0))
    });

    return estrucutraOriginal
}

let d = adaptandoFormatoApi(estrucutraOriginal)
console.log(d)