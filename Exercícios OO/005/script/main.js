class bankAccount {
  constructor(saldoCorrente = 0, balanceP = 0, ) {
    this.saldoCorrente = saldoCorrente;
    this.balanceP = balanceP;
   
  }

  depositoCorrente(value) {
    this.saldoCorrente += value;
  }

  saqueCorrente(value) {
    this.saldoCorrente -= value;
  }

  depositoPoupanca(value) {
    this.balanceP += value;
  }

  saquePoupanca(value) {
    this.balanceP -= value;
  }

  transferencia(value) {
    if (value > 0 && this.balanceP > 0) {
      this.balanceP -= value;
      this.saldoCorrente += value;
      console.log(
        "\ntransfer of R$",
        value,
        "for current account completed!"
      );
    } else
      console.log(
        "Erro: Transfer not carried out. Insufficient balance in savings account."
      );
  }

  
}
class ContaEspecial extends bankAccount {
  constructor(saldoCorrente = 0, balanceP = 0) {
    super(saldoCorrente, balanceP, );
  }
}

let evisuEspecial = new ContaEspecial(1000, 5000);

let evisuConta = new bankAccount();

// conta normal
evisuConta.depositoPoupanca(1000);
evisuConta.depositoCorrente(0);
evisuConta.transferencia(100);

console.log(
  "Agora o saldo desse jumento na conta poupança é R$",
  evisuConta.balanceP,
  "\ne o saldo desse misera na conta corrente é R$",
  evisuConta.saldoCorrente
);

// conta especial
evisuEspecial.depositoPoupanca(920);
evisuEspecial.depositoCorrente(0);
evisuEspecial.transferencia(100);

console.log(
  "Agora o saldo desse animal na conta poupança é R$",
  evisuEspecial.balanceP,
  "\ne o saldo desse misera na conta corrente é R$",
  evisuEspecial.saldoCorrente
);
