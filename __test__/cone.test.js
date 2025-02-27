import Cone from "../model/Cone.js";

describe("Teste da classe Cone", () => {
    test("Testando o cálculo da geratriz", () => {
        const raio = 2
        const altura = 3
        const geratrizEsperada = Math.sqrt((raio * raio) + (altura * altura))
        const cone = new Cone(raio, altura)

        expect(cone.calcularGeratriz()).toBeCloseTo(geratrizEsperada, 2)
    })

    test("Testando o cálculo do volume", () => {
        const raio = 2;
        const altura = 3;
        const volumeEsperado = (Math.PI * raio * raio * altura) / 3
        const cone = new Cone(raio, altura);

        expect(cone.calcularVolume()).toBeCloseTo(volumeEsperado, 2)
    })

    test("Testando o cálculo da área total", () => {
        const raio = 2
        const altura = 3
        const geratriz = Math.sqrt((raio * raio) + (altura * altura))
        const areaTotalEsperada = Math.PI * raio * (raio + geratriz)

        const cone = new Cone(raio, altura);

        expect(cone.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada, 2)
    })
})
