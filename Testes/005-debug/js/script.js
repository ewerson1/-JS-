let a = 1;
let b = 2;
let c = 3;

if ( c > a){
  a = b;
  // debugger;
}

for (let i = 5; i > 0; i--){
  b++;
  a = a + c + 1;
  c += 2;
  // debugger;
}

if ( b == a) {
  a++;
} else{
  a = a + b + c;
}

// debugger;

a= a * b;

// debugger;

console.log("teste")

// ................................
console.log("________________________")
function checkNumber(num){
  let number = Number(num);
  if(Number.isNaN(number)){
    console.log("ERRO: 404 - SÓ PASSE NÚMEROS VÁLIDOS");
  } else {
    return number;
  }
}

checkNumber(2);
checkNumber("s2");

//  fazendo com classe
console.log("________________________")
class Check{
  constructor(num){
    this.num = num
  }
  CheckN(valor){
    valor = Number(valor);
    if(Number.isNaN(valor)){
      console.log("ERRO: 404 - SÓ PASSE NÚMEROS VÁLIDOS")
    } else {
      console.log("numero")
    }
  }
}

let inputNumber = new Check()

inputNumber.CheckN(2);
inputNumber.CheckN("45")
inputNumber.CheckN("s");