let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("GRAY");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(220, 220, 20));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Jogos Vorazes";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Meu Primeiro Amor";          
        } else{
         return "Frozen 2";
        }
      } else {
        if (gostaDeFantasia) {
          return "Wish ";
        } else {
          return "coraline";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Moana";
    } else {
      return "O Pequeno Príncipe";
    }
  }
}
