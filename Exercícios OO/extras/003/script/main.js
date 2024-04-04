class Voo {
  constructor(codigoVoo, origem, destino, assentosDisponiveis) {
    this.codigoVoo = codigoVoo;
    this.origem = origem;
    this.destino = destino;
    this.assentosDisponiveis = assentosDisponiveis;
  }
  reservarAssentos(valor) {
    if (valor <= this.assentosDisponiveis) {
      this.assentosDisponiveis -= valor;
      return `você reservou ${valor} assentos `;
    } else {
      return "nenhum assento Disponiveis";
    }
  }
  ConsultarAssentosDisponiveis(){
    return `temos ${this.assentosDisponiveis} assentos Disponiveis`
  }
}

let passagem = new Voo(526, "pernambuco", " Rio de janeiro", 127);

console.log(passagem.reservarAssentos(2));
console.log(passagem.ConsultarAssentosDisponiveis())