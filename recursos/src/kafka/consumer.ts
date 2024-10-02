import {Kafka, Partitioners, TopicPartition} from 'kafkajs'
import {insertOne, query, updateOne, deleteOne} from '../lib/driverMongo'

let seq = 1

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['127.0.0.1:9092'],
    connectionTimeout: 5000
})
  
let doTime = t => new Promise((r) => { setTimeout(r, t); })

async function consumer() {
    const consumer = kafka.consumer({ groupId: 'grupo-1' })
    await consumer.connect()
    await consumer.subscribe({ topic: <string>process.env.TOPICO_DEFAULT, fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
            try {
                let objRecieved = JSON.parse(<string>message?.value?.toString())
                console.log({
                    value: message?.value?.toString(),
                    topic,
                    partition
                })
                seq++
                let hb = heartbeat
                let resume = pause()
                console.log('Haciendo tiempo')
                await insertOne('alumnos_de_kafka', objRecieved)
                console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
                await doTime(500)
                resume()
            }
            catch (err) {
                console.log(err)
            }
        }
    })
}

export let initConsumer = () => {
    try {
        consumer()
    }
    catch (err) {
        console.log(err)
    }
}

