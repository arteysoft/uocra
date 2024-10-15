import { aplicarCortes } from "../src/cortesListon/main";

describe("aplicarCortes", () => {
  it("Que todos los cortes entren en un liston", () => {
    let cortes = [10, 20, 30];
    let resp = aplicarCortes(cortes, 60);

    expect(resp.desperdicio).toBe(0);
  });

  it("Verificar el desperdicio correcto", () => {
    let input = [10, 20, 30];
    let resp = aplicarCortes(input, 62);

    expect(resp.desperdicio).toBe(3.2);
    expect(resp.quedanCortes).toBe(false);
  });

  it("Testeo para el caso que no alcancen los cortes", () => {
    let input = [10, 20, 30];
    let resp = aplicarCortes(input, 15);

    expect(resp.quedanCortes).toBe(true);
    expect(resp.cortesRestantes).toEqual([20, 30]);
    expect(resp.cortesAplicados).toEqual([10]);
  });

  it("Testeo llamar varias veces a aplicar corte", () => {
    let cortes = [10, 20, 30];
    let resp = aplicarCortes(cortes, 15);
    resp = aplicarCortes(resp.cortesRestantes, 55);

    expect(resp.quedanCortes).toBe(false);
    expect(resp.cortesRestantes).toEqual([]);
    expect(resp.cortesAplicados).toEqual([20, 30]);
  });
});
