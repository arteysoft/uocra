import { leyendoarchivos } from "../src/ok/leertxt";
import fs from 'fs'

describe("leyendoArchivos", () => {
  it("Prueba de la funcion", () => {
    let resultado = leyendoarchivos(
      () => "11 22 33 11 22 11 22 33"      
    );

    expect(resultado).toEqual([
        '11', '22', '33'
    ])
  });

  it("Prueba de la funcion con archivo", () => {
    let resultado = leyendoarchivos(() => {
      return fs.readFileSync("C:/uocra/proyectointegrador/src/ok/ok.txt",'utf-8')
    });

    expect(resultado).toEqual([
        '3', '8', '20',
        '21', '23', '28',
        '39', '65', '76',
        '90', '98', '199',
        '623', '654'
    ])
  });
});
