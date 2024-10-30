import express from 'express'
const path = require('path');
import calculosRouter from './routes/calculosRouter';

let app = express()

app.use(express.json());
app.use(express.static(
    path.join(__dirname, '../public')));

app.use('/api/calculos', calculosRouter)

app.get("/hola", (req, res) => {
    res.send("hola").end()
})

app.listen(3000, () => {
    console.log('escuchando puerto 3000')
})