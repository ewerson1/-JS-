class Inter {
  constructor(saldo = 0) {
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

let conta = new Inter();

conta.deposito(222)
console.log(conta);

