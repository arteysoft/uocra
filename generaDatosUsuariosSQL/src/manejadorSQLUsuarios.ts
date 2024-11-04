import * as todoElDriver from 'mysql2'
import {crearConexion, connect, insert, query, cerrarConexion} from './driverPromise'
import {v4 as uuid} from 'uuid'
import sha256 from 'sha256'

export let crearUsuario = async (usuarioDto) => {
    let connection = crearConexion()
    await connect(connection)

    usuarioDto.salt = [uuid(), uuid()].join('__')
    let sinEncriptar = [usuarioDto.passwordClear, usuarioDto.salt].join('__')
    console.log(sinEncriptar)
    usuarioDto.passwordEncriptada = sha256(sinEncriptar)

    let arrInsert = [uuid(), usuarioDto.usuario, usuarioDto.passwordEncriptada, usuarioDto.salt, '']
    let strSQL = 'INSERT INTO usuarios (id_usuario, nombre_usuario, password_encriptada, salt, token) VALUES (?, ?, ?, ?, ?)'

    await insert(connection, strSQL, arrInsert)
    await cerrarConexion(connection)
}

export let validarUsuario = async (usuario, passwordEnClear) => {
    let connection = crearConexion()
    await connect(connection)
    let resultSet:any = await query(connection, 'SELECT * FROM usuarios where nombre_usuario = ? ', [usuario])
    console.log(resultSet)
    await cerrarConexion(connection)

    if (resultSet.length === 0) {
        throw new Error('La combinacion de usuario y password es erronea:404 Not found')
    }

    let resultado = resultSet[0]
    let paraComparar = sha256([passwordEnClear, resultado.salt].join('__'))

    if (paraComparar !== resultado.password_encriptada) {
        throw new Error('La clave no coincide')
    }

    return resultado.id_usuario
}

export let crearToken = async (usuario, token) => {
    let connection = crearConexion()
    await connect(connection)
    let strSQL = "UPDATE usuarios set token = ? where nombre_usuario = ?"
    await insert(connection, strSQL, [token, usuario])
    await cerrarConexion(connection)
}

export let validarToken = async (token) => {
    let connection = crearConexion()
    await connect(connection)
    let resultSet:any = await query(connection, 'SELECT * FROM usuarios where token = ? ', [token])

    if (resultSet.length === 0) {
        throw new Error('NO EXISTE ESE TOKEN')
    }
    await cerrarConexion(connection)
    return resultSet[0]
}

