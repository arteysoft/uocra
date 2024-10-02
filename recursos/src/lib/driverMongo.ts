import {MongoClient} from 'mongodb'

const url:any = process.env.URL_MONGO
const NOMBRE_BASE_DE_DATOS = process.env.NOMBRE_BASE_DE_DATOS_MONGO
const CANTIDAD_LIMITE_OBJETOS_RESPUESTA = 1000

export let insertOne = async (nombreColeccion, documento) => {
    let cliente = await MongoClient.connect(url)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(nombreColeccion)
    let metadata = await collection.insertOne(documento)
    await cliente.close()
    return metadata
}

export let query = async (coleccion, query) => {
    try {
        let cliente:MongoClient = await MongoClient.connect(url)
        let db = cliente.db(NOMBRE_BASE_DE_DATOS)
        let collection = db.collection(coleccion)
        let resultado = await collection.find(query, {projection: {_id:0}}).limit(CANTIDAD_LIMITE_OBJETOS_RESPUESTA).toArray()
        await cliente.close()
        return resultado
    }
    catch (err) {
        throw err
    }
}

export let updateOne = async (coleccion, id, documento) => {
    let cliente:MongoClient = await MongoClient.connect(url)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(coleccion)
    const updateQuery = { $set: documento };
    const result = await collection.updateOne({ id }, updateQuery);
    await cliente.close()
}

export let deleteOne = async (coleccion, id) => {
    let cliente:MongoClient = await MongoClient.connect(url)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(coleccion)
    const result = await collection.deleteOne({ id });
    await cliente.close()
}
