let numbers = [1, 2, 3, 4, 5, 2, 5, 2, 1, 2, 3, 4, 5, 2, 5, 2];

for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("_________________________");

let pessoa = ["batata", "colmeia", "sansão"];
// push adiciona
// pop remove no fim do array
let pessoaRemovida = pessoa.pop();

console.log(pessoa);
console.log(pessoaRemovida);

pessoa.push("batatinha")

console.log(pessoa);

console.log("_________________________");
