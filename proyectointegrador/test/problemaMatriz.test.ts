import { adaptandoFormatoApi } from '../src/problemaMatriz'

describe("modificacion estructura", () => {
    it("Que todos los cortes queden homogeneos en cantidad", () => {
        
        let resp = adaptandoFormatoApi([
            {cortes: [1,2]}, 
            {cortes: [1,2,4,5,6,7, 8]},
            {cortes: [1,2]}
        ])
    
        expect(resp[0].cortes.length).toBe(7)
        expect(resp[2].cortes.length).toBe(7)      
    })    
})


