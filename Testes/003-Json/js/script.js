const motos = {
  Escape: "Atala",
  Motor: "2.0",
  cor: "Vermelho",
};

let moto = JSON.stringify(motos);

console.log(moto);

let motoJSON = JSON.parse(moto);

console.log(motoJSON);


console.log(motoJSON.Motor); 