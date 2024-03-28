class Inter {
  total = 0;
  constructor(saldo) {
    this.total = saldo;
  }

  deposito(valor) {
    this.total += valor;
  }

  saque(valor) {
    this.total -= valor;
  }

  verTotal() {
    console.log(this.total);
  }
}

let conta = new Inter(0);

conta.deposito(40);
conta.verTotal();
conta.saque(60);
conta.verTotal();
