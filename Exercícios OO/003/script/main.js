class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this._rua = rua;
    this._bairro = bairro;
    this._cidade = cidade;
    this._estado = estado;
  }

  set attRua(novaRua) {
    this._rua = novaRua;

  }

  get getRua() {
    return this._rua;
  }
// 
  set attBairro(novoBairro){
    this._bairro = novoBairro;
  }
  get getBairro(){
    return this._bairro
  }
//   
  set attCidade(novaCidade){
    this._cidade = novaCidade
  }

  get getCidade(){
    return this._cidade
  }
//   

}

let endereco = new Endereco(
  "Bela vista",
  "Santos drumond",
  "metrópoles",
  "Bahia"
);


endereco.attRua = "bela";
endereco.attBairro = "san"
endereco.attCidade = "Brumadinho"
console.log(endereco.getRua);
console.log(endereco.getBairro);
console.log(endereco.getCidade)