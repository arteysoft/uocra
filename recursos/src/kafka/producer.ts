import {Kafka, Partitioners} from 'kafkajs'

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})

export async function producer(objPersist) {
    const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })
    
    await producer.connect()
    await producer.send({
        topic: <string>process.env.TOPICO_DEFAULT,
        messages: [{ value: JSON.stringify(objPersist) }]
    })
    await producer.disconnect()
}

export let producirNumeros = async () => {
    for (let x = 1; x < 10000; x++) {
        console.log(['----', x, '----'])
        await producer({num: x})
    }
}

export let encolar = async (obj) => {
    await producer(obj)
}

