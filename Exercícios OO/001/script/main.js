class Inter {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo += valor;
    return this.saldo;
  }

  saque(valor) {
    this.saldo -= valor;
    return this.saldo;
  }


}

let conta = new Inter(2000);
console.log("saldo inicial ", conta.saldo);

conta.deposito(200);
console.log("seu saldo agora é ", conta.saldo);

conta.saque(1230);
console.log("seu saldo agora é ", conta.saldo)