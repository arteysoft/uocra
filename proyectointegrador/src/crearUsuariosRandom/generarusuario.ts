const faker = require('faker');
const uuid = require('uuid')

function crearObjetoFake() {
    return {
        id : uuid.v4(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        country: faker.address.country(),
        accountName: faker.finance.accountName(),
        account: faker.finance.account(),
        amount: faker.finance.amount()
    }
}

export default crearObjetoFake