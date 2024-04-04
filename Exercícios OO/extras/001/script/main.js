class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor){
        this.saldo += valor
        return `O valor depositado foi R$ ${valor},00`
    }

    saque(valor){
        this.saldo -= valor
        return `O valor sacado foi R$ ${valor},00`
    }
}

let contaEvisu = new ContaBancaria(0);

console.log(contaEvisu.deposito(200));
console.log(contaEvisu.saque(100));
console.log("portanto o seu saldo é de R$", contaEvisu.saldo)