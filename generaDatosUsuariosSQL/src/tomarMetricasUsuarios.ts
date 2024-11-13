import 'dotenv/config'
import { crearConexion, query } from './driverPromise'

type functionQueNoTieneParamsNiRetornanada = (...z:any) => void 

let tomarMetrica = async (strTitulo:string, fn:functionQueNoTieneParamsNiRetornanada) => {
    console.log('A continuacion se va a tomar la metrica sobre: ' + strTitulo)
    let tsInit:number = new Date().getTime()
    console.log(['start:', tsInit])
    await fn()
    let tsFin:number = new Date().getTime()
    let tspan = tsFin - tsInit
    console.log(['Tiempo transcurrido ', tspan])
}

let fnSelect = async () => {
    let conn = await crearConexion()
    let sql = "SELECT count(*) as cantidad FROM Usuarios " // WHERE firstName like ?"
    let rs = await query(conn, sql, ['%az%'])
    console.log(rs)
    conn.end()
}


tomarMetrica("", async ()=>{
    await fnSelect()
})

