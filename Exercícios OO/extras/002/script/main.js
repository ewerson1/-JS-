class ContaBancaria{
  constructor(numeroConta, saldo){
      this.numeroConta = numeroConta
      this.saldo = saldo
  }
  depositar(valor){
      this.saldo += valor
  }
  sacar(valor){
      if(valor <= this.saldo){
          this.saldo -= valor
          console.log(`saque de R$ ${valor},00 realizado com sucesso`)
      } else {
          console.log("ERRO: saldo insuficiente")
      }
  }
  consultarSaldo(){
      return this.saldo
  }
}

let contaEvisu = new ContaBancaria(666, 0);
console.log(contaEvisu.consultarSaldo());

contaEvisu.depositar(2000);
contaEvisu.sacar(100);
console.log(contaEvisu.consultarSaldo());
