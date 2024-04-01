class ContaBancaria {
  constructor(saldoCorrente = 0, saldoPoupanca = 0, jurosPoupanca = 0) {
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  depositoCorrente(valor) {
    this.saldoCorrente += valor;
    return this.saldoCorrente;
  }

  saqueCorrente(valor) {
    this.saldoCorrente -= valor;
    return this.saldoCorrente;
  }

  depositoPoupanca(valor) {
    this.saldoPoupanca += valor;
    return this.saldoPoupanca;
  }

  saquePoupanca(valor) {
    this.saldoPoupanca -= valor;
    return this.saldoPoupanca;
  }

  transferencia(valor) {
    if (valor > 0 && this.saldoPoupanca > 0) {
      this.saldoPoupanca -= valor;
      this.saldoCorrente += valor;
      console.log("\ntransferencia de R$",valor, "Para conta corrente concluída!");
    } else
      console.log(
        "Erro: Transferência não realizada. Saldo insuficiente na conta poupança."
      );
  }
}
class ContaEspecial extends ContaBancaria {
  constructor(saldoCorrente = 0, saldoPoupanca = 0, jurosPoupanca = 0) {
   super (saldoCorrente , saldoPoupanca , jurosPoupanca )
  }
}

let evisuEspecial = new ContaEspecial();

let evisuConta = new ContaBancaria();

evisuConta.depositoPoupanca(1000);
evisuConta.depositoCorrente(0);
evisuConta.transferencia(100);


console.log(
  "Agora o saldo de evisu na conta poupança é R$",
  evisuConta.saldoPoupanca,
  "\ne o saldo desse misera na conta corrente é R$",
  evisuConta.saldoCorrente,
);


// conta especial
evisuEspecial.depositoPoupanca(120);
evisuEspecial.depositoCorrente(0);
evisuEspecial.transferencia(100);

console.log("Agora o saldo de evisu na conta poupança é R$", evisuEspecial.saldoPoupanca, 
"\ne o saldo desse misera na conta corrente é R$", evisuEspecial.saldoCorrente,
);
