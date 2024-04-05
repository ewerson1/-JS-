class ContaBancaria {
  constructor(saldoCorrente = 0, saldoPoupanca = 0, ) {
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
   
  }

  depositoCorrente(valor) {
    this.saldoCorrente += valor;
    debugger;
  }

  saqueCorrente(valor) {
    this.saldoCorrente -= valor;
  }

  depositoPoupanca(valor) {
    this.saldoPoupanca += valor;
  }

  saquePoupanca(valor) {
    this.saldoPoupanca -= valor;
  }

  transferencia(valor) {
    if (valor > 0 && this.saldoPoupanca > 0) {
      this.saldoPoupanca -= valor;
      this.saldoCorrente += valor;
      console.log(
        "\ntransferencia de R$",
        valor,
        "Para conta corrente concluída!"
      );
    } else
      console.log(
        "Erro: Transferência não realizada. Saldo insuficiente na conta poupança."
      );
  }

  
}
class ContaEspecial extends ContaBancaria {
  constructor(saldoCorrente = 0, saldoPoupanca = 0) {
    super(saldoCorrente, saldoPoupanca, );
  }
}

let evisuEspecial = new ContaEspecial(1000, 5000);

let evisuConta = new ContaBancaria();

// conta normal
evisuConta.depositoPoupanca(1000);
evisuConta.depositoCorrente(0);
evisuConta.transferencia(100);

console.log(
  "Agora o saldo desse jumento na conta poupança é R$",
  evisuConta.saldoPoupanca,
  "\ne o saldo desse misera na conta corrente é R$",
  evisuConta.saldoCorrente
);

// conta especial
evisuEspecial.depositoPoupanca(920);
evisuEspecial.depositoCorrente(0);
evisuEspecial.transferencia(100);

console.log(
  "Agora o saldo desse animal na conta poupança é R$",
  evisuEspecial.saldoPoupanca,
  "\ne o saldo desse misera na conta corrente é R$",
  evisuEspecial.saldoCorrente
);
