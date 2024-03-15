let nome = "joaoaaaaaaa";

console.log(nome.length);

if (nome.length < 10) {
  console.log("menor q 10");
} else {
  console.log("maior q 10");
}

console.log("_________________________");

let marca = "nike";

console.log(typeof marca.toUpperCase());
console.log(marca.toUpperCase());

let marca2 = "ADIDAS";
console.log(marca2.toLocaleLowerCase());

console.log("_________________________");

let indevido = {
  name: "jurubeba",
  profissao: "engine",
  idade: "29",
};

delete indevido.idade;
console.log(indevido.name);
console.log(indevido.idade);
console.log(indevido.profissao);

indevido.sobrenome = true;
console.log(indevido.sobrenome);

console.log("_________________________");

let carrinho = {
  marca: "Lancer",
  portas: 2,
  motor: "2.0",
  peso: "1000 KG",
};

console.log(carrinho);

let adicionais = {
  turbo: true,
  jogoDeRodas: true,
};

console.log(carrinho);
Object.assign(carrinho, adicionais);
Object.assign(adicionais, carrinho);

console.log("_________________________");
// metodo key

console.log(Object.keys(carrinho));

let objctA = {
  pontos: 10,
};

objctB = objctA;

let objctC = {
  pontos: 11,
};

console.log(objctA == objctB);
console.log(objctA == objctC);

console.log("_________________________");

// LOOP em Arrays
