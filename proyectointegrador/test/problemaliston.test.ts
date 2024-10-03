const assert = require('assert');
import {calcularDesperdicio} from '../src/cortesListon/main'

describe('pruebas proyecto integrador', function() {    
    it('prueba desperdicio', function() {
        let input = [10, 15]
        let output = calcularDesperdicio(input)
        
        assert.strictEqual(output.liston, 300);
        assert.strictEqual(output.desperdicio, 0.8);
    });
});

