console.log("1")

setTimeout(function(){
    console.log("foi")
}, 2000)

//////////////////

let pao = Promise.resolve(4);

console.log(pao);

pao.then((value) => {console.log(`${value + 5}`)})

await

const somaComDelay = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b);
    }, 2000);
  });
};

async function resSoma(a,b,c) {
    let x = somaComDelay(a,b);
    let y = c;

    return await x + y;
}

resSoma(1,2,3).then(value => console.log(value));



async function pegaDados() {
  const resultado = await fetch("https://api.github.com/users/ewerson1");
  const resultadoConvertido = await resultado.json();
  console.log(resultadoConvertido);
}

pegaDados();

async function teste() {
  console.log("testando 1... 2... 3..");
}

teste();

teste().then((resposta) => {
    console.log(resposta)
})
