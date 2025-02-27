import Cilindro from "../model/Cilindro.js"

describe("Teste da classe Cilindro", () => {
    test("Testando o cálculo do volume", () => {
        const raio = 2
        const altura = 3
        const volumeEsperado = Math.PI * raio * raio * altura
        const cilindro = new Cilindro(raio, altura)

        expect(cilindro.calcularVolume()).toBeCloseTo(volumeEsperado, 2)
    });

    test("Testando o cálculo da área total", () => {
        const raio = 2
        const altura = 3
        const areaTotalEsperada = 2 * Math.PI * raio * (altura + raio)

        const cilindro = new Cilindro(raio, altura)

        expect(cilindro.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada, 2)
    })
})
