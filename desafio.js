let jogador = []; //variaveis com arrays vazias
let cpu = [];
let inicio = confirm("Bem vindo ao BlackJack! \nQuer iniciar uma nova rodada?"
);

if (inicio) {

  // VERIFICAÇÃO DOS ÁSES //

  let cartasIguais = true;
  while (cartasIguais) {
    jogador = [];
    cpu = [];

    for (let i = 0; i < 2; i++) {
      jogador.push(comprarCarta());
      cpu.push(comprarCarta());
    }

    if (
      (jogador[0].valor === 11 && jogador[1].valor === 11) ||
      (cpu[0].valor === 11 && cpu[1].valor === 11)
    ) {

      jogador = [];
      cpu = [];
    } else {

      cartasIguais = false;

    }

  }

  // DAR CARTA //


  let textoCartaJogador = "";
  let textoCartasCPU = "";
  let pontuacaoJogador = 0;
  let pontuacaoCPU = 0;

  for (let i = 0; i < jogador.length; i++) {
    pontuacaoJogador += jogador[i].valor;
    textoCartaJogador += jogador[i].texto + " ";

  }

  for (let j = 0; j < cpu.length; j++) {
    if (j < jogador.length) {
      pontuacaoCPU += cpu[j].valor;
      textoCartasCPU += cpu[j].texto + " ";

    }
    
  }

  let outraCarta = true;
    // COMPRAR CARTA JOGADOR
  while (outraCarta && pontuacaoJogador < 22) {const confirmarOutraCarta = confirm(`Suas cartas são ${textoCartaJogador}. A carta revelada do computador é ${cpu[0].texto}. \nDeseja comprar mais uma carta?`);

    if (confirmarOutraCarta) {

      let outraCarta = comprarCarta();
      jogador.push(outraCarta);
      pontuacaoJogador += outraCarta.valor;
      textoCartaJogador += outraCarta.texto;

    } else {

      outraCarta = false;
    }

  }

  //CPU JOGA A MSM QUANTIDADE DE CARTAS QUE O JOGADOR

  while (pontuacaoCPU <= pontuacaoJogador && pontuacaoJogador < 21) {
    let outrasCartas1 = comprarCarta();
    cpu.push(outrasCartas1);
    pontuacaoCPU += outrasCartas1.valor;
    textoCartasCPU += outrasCartas1.texto + " ";
  }


  let finalPartida = " ";
    // PARAMENTROS DE PONTUAÇÃO
  if (pontuacaoJogador > pontuacaoCPU && pontuacaoJogador <= 21) {
    finalPartida = "Você ganhou!";
    outraCarta = false;
  } else if (pontuacaoCPU > pontuacaoJogador && pontuacaoCPU <= 21) {
    finalPartida = "O computador ganhou!";
    outraCarta = false;
  } else if (pontuacaoJogador > 21) {
    finalPartida = "Você perdeu!";
    outraCarta = false;
  } else if (pontuacaoCPU > 21) {
    finalPartida = "Você perdeu!";
    outraCarta = false;
  } else {
    finalPartida = "Empate!";
  }

  alert(`Usuario - Cartas: ${textoCartaJogador} - Pontuação: ${pontuacaoJogador} \nComputador - Cartas: ${textoCartasCPU} - Pontuação: ${pontuacaoCPU} \n${finalPartida}`
  )

} else {

  alert(`Fim de Jogo`);

}