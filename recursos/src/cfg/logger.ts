import log4js from 'log4js'

let configuracionLogger = {
    appenders: {
        archivo: {
            type: 'file',
            filename: '/home/andy/logs/log.log'
        },
        consola: {
            type: 'stdout'
        }        
    },
    categories: {
        default: {
            appenders: ['archivo', 'consola'],
            level: 'trace'
        }
    }
}

log4js.configure(configuracionLogger)

export default nombre => log4js.getLogger(nombre)