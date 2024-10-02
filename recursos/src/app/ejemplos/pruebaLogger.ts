import createLog from '../../cfg/logger'

export default () => {

    let log = createLog('prueba')
    console.log('estoy en prueba')
    
    log.trace('Este es un mensaje de trace, solo para ambientes locales')
    log.debug('este se puede utilizar en ambientes de prueba')
    log.info('este puede ir en produccion, un tiempo')
    log.warn('tiene que ir en produccion')
    log.error('si o si en produccion')
    log.fatal('NUNCA LO USE')
}