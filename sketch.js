function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraPersonagem();
    mostraCarro();
    movimentaPersonagem();
    movimentaCarro();
    voltaPosicaoDoCarro();
    verificaColisao();
    mostraPontos();
    marcaPonto();
  }
  
  
  
  
  
  
  
  
  