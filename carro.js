//carros
let xCarros = [435, 435, 435, 435, 435, 435];
let yCarros = [ 40, 95, 152, 210, 265, 318];
let velocidadeCarros = [ 2, 5, 4, 4, 1, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  image (imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  xCarros[i] -= velocidadeCarros[i];

  }
}

function voltaPosicaoDoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
      if (passouTodaATela(xCarros[i])){
            xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < - 50;
  }

