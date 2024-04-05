"use strict"
class Inter {
  constructor(saldo) {
      this.saldo = saldo;
  }

  deposito(valor) {
      this.saldo += valor;
      
  }

  saque(valor) {
      this.saldo -= valor;
     
  }
}

let conta = new Inter(0);

console.log(conta.deposito(222));
console.log(conta.saldo);

