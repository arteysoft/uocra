import 'dotenv/config'
import { crearConexion, query } from './driverPromise'

type functionQueNoTieneParamsNiRetornanada = (...z:any) => void 

let tomarMetrica = async (strTitulo:string, fn:functionQueNoTieneParamsNiRetornanada) => {
    console.log('A continuacion se va a tomar la metrica sobre: ' + strTitulo)
    let tsInit:number = new Date().getTime()    
    await fn()
    let tsFin:number = new Date().getTime()
    let tspan = tsFin - tsInit
    console.log(['Tiempo transcurrido ', tspan])
}

const SQL1 = [
    "SELECT * FROM usuarios WHERE firstName like 'ca%' and amount > 400 ",
    "and amount < 700  ",
    "order by firstName, amount "
].join(' ')

/*
CREATE INDEX usuarios_idx_amount ON usuarios (amount) using HASH;

Con este indice 6,7 segundos

DROP INDEX usuarios_idx_amount on usuarios

CREATE INDEX usuarios_idx_firstName ON usuarios (firstName) using HASH;

DROP INDEX usuarios_idx_firstName on usuarios

CREATE INDEX usuarios_idx_firstName_amount ON usuarios (firstName, amount) using HASH;

DROP INDEX usuarios_idx_firstName_amount on usuarios

*/


let fnSelect = async () => {
    let conn = await crearConexion()    
    let rs = await query(conn, SQL1, [])
    // console.log(rs)
    conn.end()
}


tomarMetrica("query usuarios", async ()=>{
    await fnSelect()
})

