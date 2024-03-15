let nome = "matheus";

for(let i = 0; i < 10; i = i + 1) {
  if(i == 3) {
    nome = "joão";
    
  }

  if(i == 5 && nome == "joao") {
    console.log("o nome é jaum, pode parar");
    break;
  }

  console.log(i);
}
