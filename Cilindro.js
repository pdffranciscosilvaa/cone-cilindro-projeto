export default class Cilindro{
    constructor(raio,altura){
      this.raio = raio
      this.altura = altura
    }

    calcularVolume(){
        return Math.PI * this.raio * this.raio * this.altura
    }

    calcularAreaTotal(){
        return (  2 * ( Math.PI * this.raio * this.raio )  + 2 * (Math.PI * this.raio * this.altura))
    }
}