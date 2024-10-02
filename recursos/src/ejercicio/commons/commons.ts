export let esDivisible = (dividendo:number, divisor:number):Boolean => dividendo % divisor === 0

export let esPrimo = (numeroEvaluar, numerosPrimosPrevios:Array<number>):Boolean => {
    for (let i of numerosPrimosPrevios) {
        if (esDivisible(numeroEvaluar, i)) {
            return false
        }        
    }
    return true
}

/*
Entonces, si array esta aca ? No lo tengo que pasar como parametro.
Esta orientación es la programacion orientada a objetos
El modulo va mutando, dado que tiene un state.
ES MENOS TESTEABLE !!!! PORQUE ??? Yo para testear en unidades de unit test
Es mas performante, aca hay que tener en cuenta que solo paso el puntero al array no la copia
*/

/*
Si el array NO esta aca ? la orientacion es funcional
La orientacion funcional la ventaja es la reutilizacion y el testeo unitario
*/