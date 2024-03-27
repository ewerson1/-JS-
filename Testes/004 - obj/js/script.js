const moto = {
  marca: "",
  buzinar: function () {
    console.log("PIIIIII");
  },

  setMarca: function (marca) {
    this.marca = marca;
  },
  getMarca: function () {
    return "A marca desta moto é: " + this.marca;
  },
};
moto.buzinar();
moto.setMarca("Honda");
console.log(moto.marca);
moto.getMarca();
console.log(moto.getMarca());

console.log("____________________");

let pessoa = {
  dedos: 2,
};

let dedos2 = Object.create(pessoa);
console.log(dedos2.dedos);

console.log("____________________");

const criandoCachorro = (raca, patas, cor) => {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
};

let coala = criandoCachorro("au au", 2, "apsld");
console.log(coala);

console.log("____________________");

function Pizza(sabor, arroz) {
  this.sabor = sabor;
  this.arroz = arroz;
}

let frango = new Pizza("frango com catupiry");
let outro = new Pizza("repolho");

console.log(frango.arroz);
console.log(frango.sabor);

console.log("____________________");

let cachorros = {
  pata: 4,
  raca: "SRD",
  latir: function () {
    console.log("AUUUUUUUUU LATE CACHORRO LATE CORAÇÃO");
  },
};

let jurubeba = Object.create(cachorros);
jurubeba.latir();

jurubeba.raca = "pudin";

console.log(jurubeba.raca); //pudin
console.log(cachorros.raca); //SRD

console.log("____________________");
// class constructor
class Motoquinha {
  constructor(motor, pneu, escape) {
    this.motor = motor;
    this.pneu = pneu;
    this.escape = escape;
  }
  corte() {
    console.log("RAAAAAAM DAM DAM DAM DAM");
  }
}
let tw200 = Object.create(Motoquinha.prototype);
tw200.corte();

let Tw300 = new Motoquinha("35 cavalos ", 123, "Atala");
console.log(Tw300);

console.log("____________________");

// class metodhs

class Motoquinhaaa {
  constructor(pneu, escape) {
    this.pneu = pneu;
    this.escape = escape;
  }
  cortarGiro() {
    console.log("RAAAAAMAMMMM DAAAAAM DAMMM");
  }
}

Motoquinhaaa.prototype.motor = 20;

let cb300 = new Motoquinhaaa("125", "atala");

console.log(cb300.motor);
cb300.cortarGiro();

// Symbol

let rodas = Symbol();

Motoquinhaaa.prototype[rodas] = 2;

console.log(Motoquinhaaa.prototype[rodas]);

// getters e setters

class Padaria {
  constructor(pao) {
    this.pao = pao;
  }
  get verPao() {
    return "o pão é " + this.pao;
  }
  set novoPao(value) {
    this.pao = value;
  }
}

let frances = new Padaria("pao frances");
console.log(frances.verPao);
frances.novoPao = "frances";
console.log(frances.novoPao);

// herança
class Mamifero {
  constructor(patas, maos) {
    this.patas = patas;
    this.maos = maos;
  }
}

let aranha = new Mamifero(4, 12);

console.log(aranha);

class gato extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }
  mia() {
    console.log("miauuuuu");
  }
}

let camomila = new gato(12, "chi auau")
console.log(camomila.patas, camomila.raca);

