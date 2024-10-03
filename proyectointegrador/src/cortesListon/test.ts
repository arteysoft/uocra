import { calcularDesperdicio } from "./main";

let test_calcularDesperdicio = () => {
    let input = [10, 15]
    let output = calcularDesperdicio(input)
    
    console.log((output.liston === 300) ? 'OK':'FALLO')
    console.log((output.desperdicio === 0.8) ? 'OK': 'FALLO')
}

export default () => {
    test_calcularDesperdicio()

}

