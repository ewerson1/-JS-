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

//

console.log("_________________________");

let pessoa = ["batata", "colmeia", "sansão"];
// push adiciona
// pop remove no fim do array
let pessoaRemovida = pessoa.pop();

console.log(pessoa);
console.log(pessoaRemovida);

pessoa.push("batatinha");

console.log(pessoa);

console.log("_________________________");

// shift e unshift
// shift remove o primeiro e unshift adc no primeiro

let carros = ["civic", "honda", "sahara"];

let removePrimeiroCarro = carros.shift();

console.log(removePrimeiroCarro);
console.log(carros);

carros.unshift("porsche");

console.log(carros);

console.log("_________________________");

// forEach

const nomes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 122, 1242, 127, 182];

nomes.forEach((nome) => {
  console.log("o nome é " + nome);
});

console.log("_________________________");

// includes

let frutas = ["Beterraba", "jirimun", "batata"];

console.log(frutas.includes("Beterraba"));

console.log("_________________________");

// reverse

let reversar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 122, 1242, 127, 182];

console.log(reversar.reverse());

console.log("_________________________");

// TRIM

let bugadin = "     2   er2 rw er we r wt w t";

console.log(bugadin.trim());

console.log("_________________________");

// padStart

let pad = "334";

console.log(pad.padStart(6, "0"));

console.log("_________________________");

let frase = "o macaco é prego igual a aranha salamandra";

console.log(frase.split(" "));

console.log("_________________________");

// repeat
console.log("calango ".repeat(5));

console.log("_________________________");

// destructuring
const obj = {
  rodas: 4,
  portas: 5,
  tetosolar: true,
};

const { rodas: vRodas, portas: vPortas, tetosolar: vTetosolar } = obj;

console.log(vRodas, vPortas, vTetosolar);

console.log("_________________________");

// destructuring em Array

let numero = [2, 3, 5, 6, 7, 7];
let [num1, num2, num3, num4, num5, num6] = numero;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

console.log("_________________________");

