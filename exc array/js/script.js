// exec 1
console.log("EXERCISE 01 ");
let arra = ["Miojo", "Frango", "Cuscuz", "manga", "pé de cavalo"];
console.log("EXERCISE 01 ");
console.log("");
console.log(arra[1]);
console.log(arra[3]);
console.log(arra[4]);

console.log("____________________________");
console.log("");
// 002
console.log("EXERCISE 02 ");

let primeiro = ["arriba", "irrruuu"];
let segundo = ["rabanada", "twix", "ratatui", "cebola"];
console.log(primeiro.length);
console.log(segundo.length);

console.log("____________________________");
console.log("");

// 003
console.log("EXERCISE 03 - objetos");

let onibus = {
  rodas: 8,
  passageiros: 40,
  portas: 2,
};
console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);

console.log("____________________________");
console.log("");

// 004;
console.log("EXERCISE 04 - deletando e adicionando ");

delete onibus.rodas;
onibus.janelas = 20;
console.log(onibus);
console.log(onibus.janelas);

console.log("____________________________");
console.log("");

// 005;
console.log("EXERCISE 05 ");
let nomes = ["Ewerson", "Maria", "Paulo", "Fernandin", "Suzi"];

if (nomes.includes("Ewerson")) {
  console.log("Meu nome está na lista!!");
} else {
  console.log("Meu nome não esta na lista!!!");
}

console.log("____________________________");
console.log("");

// 006;
console.log("EXERCISE 06 ");
let receita = [
  "arroz",
  "feijão",
  "frango",
  "salada",
  "batata",
  "sobremesa",
  "bebida",
];
let complementos = ["farinha", "açúcar", "ovos", "leite"];

const verificar = (arr) => {
  if (arr.length >= 5) {
    console.log("Muitos Elementos");
  } else {
    console.log("Poucos Elementos");
  }
};
verificar(receita);
verificar(complementos);

console.log("____________________________");
console.log("");

// 007;
console.log("EXERCISE 07 ");
// usando forEach
let powerRangers = ["vermelho", "Azul", "Amarelo", "Roxo"];
powerRangers.forEach((rangers) => {
  console.log("Power ranger: " + rangers);
});
console.log("");
// fazendo com for
for (let i = 0; i < powerRangers.length; i++) {
  console.log(powerRangers[i]);
}

console.log("____________________________");
console.log("");

// 008;
console.log("EXERCISE 08 ");
let pokemons = {
  ash: "pikachu ",
  evisu: "raichu ",
  rayanne: "arceus ",
};

console.log(pokemons.ash);
console.log(pokemons.evisu);
console.log(pokemons.rayanne);

console.log("____________________________");
console.log("");

// 009;
console.log("EXERCISE 9 ");

const frase = "xerém com galinha depois com macarrão e arroz";
const fraseSeparada = frase.split(" ");
console.log(frase.split(" "));
for (let i = 0; i < fraseSeparada.length; i++) {
  console.log(fraseSeparada[i]);
}

console.log("____________________________");
console.log("");

// 010;

console.log("EXERCISE 10 - metodhs ");
const calculator = {
  sum: function (a, b) {
    return a + b;
  },
  subtraction: function (a, b) {
    return a - b;
  },
  multiplication: function (a, b) {
    return a * b;
  },

  division: function (a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Erro: Division by 0! ";
    }
  },
};

console.log("The Sum is: ", calculator.sum(1, 2));
console.log("The subtraction is: ", calculator.subtraction(2, 4));
console.log("A multiplication is: ", calculator.multiplication(2, 5));
console.log("The division is: ", calculator.division(2,6));
