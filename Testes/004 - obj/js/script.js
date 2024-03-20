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

function Pizza(sabor,arroz) {
  this.sabor = sabor;
  this.arroz = arroz;
}

let frango = new Pizza ("frango com catupiry");
let outro = new Pizza ("repolho")

console.log(frango.arroz)
console.log(frango.sabor)

console.log("____________________");