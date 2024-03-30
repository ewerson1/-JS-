class Carro {
  constructor(marca, cor, tanqueGasolina) {
    this.marca = marca;
    this.cor = cor;
    this.tanqueGasolina = tanqueGasolina;
  }

  abastecer(quantidade) {
    this.tanqueGasolina += quantidade;
  }

  dirigir(distanciaPercorrida) {
    let litrosPorKm = distanciaPercorrida / 12
    if (this.tanqueGasolina > 0) {
        this.tanqueGasolina -= litrosPorKm
    } else console.log("NÃO TEM GASOSA")
  }

  emMovimento(distanciaPercorrida){
    setInterval(() => { this.dirigir(distanciaPercorrida)
        console.log(this.tanqueGasolina)
    }, 3000)
  }
}

let corsinha = new Carro("corsa", "rosa", 1);
corsinha.dirigir(24);

console.log(corsinha);





