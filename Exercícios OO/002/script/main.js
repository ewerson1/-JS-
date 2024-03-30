class Carrinho {
  constructor(itens, qtd, valorTotal) {
    this.itens = itens;
    this.qtd = qtd;
    this.valorTotal = valorTotal;
  }
  addItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].qtd += item.qtd;
      }
    }
    this.qtd += item.qtd;
    this.valorTotal += item.preco * item.qtd;
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "short",
      qtd: 2,
      preco: 122,
    },
    {
      id: 2,
      nome: "blusa",
      qtd: 1,
      preco: 50,
    },
    {
      id: 3,
      nome: "calcinha",
      qtd: 2,
      preco: 300,
    },
  ], 3, 120);

carrinho.addItem({ id: 1, nome: "blusinha", qtd: 2, preco: 199 });
console.log(carrinho);
