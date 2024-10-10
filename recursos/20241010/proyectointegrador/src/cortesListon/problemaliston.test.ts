import {calcularDesperdicio} from './main'

describe('sum function', () => {
    it('should return the sum of two numbers', () => {
        let input = [10, 15]
        let output = calcularDesperdicio(input)

        expect(output.liston).toBe(300);        
    });
  
    it('el desperdicio tiene que ser 0.8', () => {
        let input = [10, 15]
        let output = calcularDesperdicio(input)

        expect(output.desperdicio).toBe(0.1);
    });
  });