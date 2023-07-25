//personagem

let xPersonagem = 100;
let yPersonagem = 366;
let colisao = false;
let meusPontos = 0;

function mostraPersonagem(){
  image (imagemPersonagem,xPersonagem, yPersonagem, 30, 30);
}

function movimentaPersonagem(){
  if (keyIsDown(UP_ARROW)){
    yPersonagem -=3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yPersonagem +=3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPersonagem, yPersonagem, 15)
    if (colisao){
      voltaPersonagemPosicaoInicial();
      somDaColisao.play();
      
     if (pontosMaiorQueZero()){
      meusPontos -= 1;
     }
    }
  }
}

function voltaPersonagemPosicaoInicial(){
  yPersonagem = 366;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(255,215,0))
  text(meusPontos, width / 5, 26);
  
}

function marcaPonto(){
  if (yPersonagem < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaPersonagemPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yPersonagem < 366;
}