let a = 1;
let b = 2;
let c = 3;

if (c > a) {
  a = b;
  // debugger;
}

for (let i = 5; i > 0; i--) {
  b++;
  a = a + c + 1;
  c += 2;
  // debugger;
}

if (b == a) {
  a++;
} else {
  a = a + b + c;
}

// debugger;

a = a * b;

// debugger;

console.log("teste");

// ................................
console.log("________________________");
function checkNumber(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    console.log("ERRO: 404 - PLEASE PASS VALID NUMBERS");
  } else {
    return number;
  }
}

checkNumber(2);
checkNumber("s2");

//  doing with class
console.log("________________________");
class Check {
  constructor(num) {
    this.num = num;
  }
  CheckN(valor) {
    valor = Number(valor);
    if (Number.isNaN(valor)) {
      console.log("ERRO: 404 - PLEASE PASS VALID NUMBERS");
    } else {
      console.log("is number");
    }
  }
}

let inputNumber = new Check();

inputNumber.CheckN(2);
inputNumber.CheckN("45");
inputNumber.CheckN("s");

// exceptions
console.log("________________________");

const saudacao = (nome) => {
  if (typeof nome != "string"){
    throw new Error("the parameter is not a string");
  } else {
    console.log("true");
  }
};

saudacao("batat");
saudacao(2);

// try e catch
console.log("________________________")
 try{
  let c = a + b;
 } catch(x) {
   console.log("ERRO: 404 " + x)
 }
 console.log("________________________")

let arr = [1,2,4,5,6]
let arr2 = [];

const interarArray = (arr) => {
  if (arr.length == 0) {
    throw new Error("Pass a value");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
};


interarArray( arr);
interarArray(arr2);
