const assert = require('assert');
const suma = require('../src/suma')

describe('Bateria de test para suma', function() {
    it('la suma de 2 + 3 deberia ser 5', function() {
        assert.strictEqual(suma(2, 3), 5);
    });

    it('should return 0 when adding -1 + 1', function() {
        assert.strictEqual(suma(-1, 1), 0);
    });

    it('should return 10 when adding 5 + 5', function() {
        assert.strictEqual(suma(5, 5), 10);
    });
});

// se ejecuta con npx mocha
