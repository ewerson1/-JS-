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

let individo = {
  name: "jurubeba",
  profissao: "engine",
  idade: "29",
};

delete individo.idade;
console.log(individo.name);
console.log(individo.idade);
console.log(individo.profissao);

individo.sobrenome = true;
console.log(individo.sobrenome);

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
