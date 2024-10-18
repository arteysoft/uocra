import express from 'express'

// Gaussian (Normal) Distribution Formula
function gaussian(x, mean, standardDeviation) {
    const exponent = -((x - mean) ** 2) / (2 * standardDeviation ** 2);
    const coefficient = 1 / (standardDeviation * Math.sqrt(2 * Math.PI));
    return coefficient * Math.exp(exponent);
}

/*
// Example usage
const mean = 0;  // Mean (μ)
const standardDeviation = 1;  // Standard deviation (σ)

const x = 1;  // Example input value
const result = gaussian(x, mean, standardDeviation);
*/


export default express.Router()
    .use('', (request, response, next) => {
        console.log('Pasando por el middleware de hola')
        next()
    })    
    .get('/ej1', async (request, response) => {
        let datos:number[] = [2, 3, 9, 88].sort((a,b)=> Math.random()-0.5)
        /*
        for (let idx = 1; idx <= 10; idx++) {
            let newData = gaussian(idx, 5, 1.20) + 1
            newData = Math.round(newData * 1000)
            console.log(newData)
            datos.push(newData)
        }
        */

        try {
            response            
            .status(200)
            .send(datos)
        }
        catch(err) {
            response            
            .status(500)
            .send()
        }
    })
    

