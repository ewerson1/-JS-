// let reg1 = new RegExp("jubileu")
// let reg2 = /jamanta/;

// console.log(reg1.test("jubileu"))
// console.log(reg2.test("jamanta"))
// console.log(/testando/.test("tttttttestandoooo"))

// console.log(/[2-3]/.test("200"))
// // ............

// const ponto = /./; // tudo

// const d = /\d/;  //[0-9]
// console.log(d.test(""))

//  teste for 

// let batata = [2, 3, 2, 1, 6, 7, 8];

// let arrayFiltrado = batata.filter((value) => {
//   return value > 3;
// });

// const retornador = (arr) => {
//   let filters = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 2) {
//       filters.push(arr[i]);
//     }
//   }
//   return filters;
// };

// const resultado = retornador(batata);
// console.log(resultado);




// let dia = /\d\d/;
// console.log(dia.test("2019") && "2019".length == 2)
// console.log(dia.test("gdf"))
// console.log(dia.test("05") && "05".length == 2)


let validarEmail = /\w+@\w+.\w+/;


console.log(validarEmail("evisu@gmail.com"))