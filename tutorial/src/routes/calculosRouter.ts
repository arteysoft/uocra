import express from 'express'

export default express.Router()    
    .post('/sumar', async (request, response) => {

        console.log(request.body)

        const total = request.body.x + request.body.y

        try {
            response            
            .status(200)
            .send(JSON.stringify({total}))
        }
        catch(err) {
            response            
            .status(500)
            .send()
        }
    })

    