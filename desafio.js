// Criar duas variáveis vazias para os arrays dos jogadores
let jogador = [];
let cpu = [];

// Perguntar ao usuário se ele quer jogar e armazenar a resposta em "inicio"
let inicio = confirm("Bem vindo ao BlackJack! \nQuer iniciar uma nova rodada?"
);

// Se o usuário clicar em OK, executar o jogo
if (inicio) {

  // VERIFICAÇÃO DOS ÁSES //

  // Criar uma variável para verificar se as cartas do jogador e do CPU são iguais
  let cartasIguais = true;
  while (cartasIguais) {
    jogador = [] // Limpar o array do jogador
    cpu = [] // Limpar o array do CPU

    // Comprar duas cartas para cada jogador
    for (let i = 0; i < 2; i++) {
      jogador.push(comprarCarta()) // Adicionar uma nova carta para o jogador
      cpu.push(comprarCarta()) // Adicionar uma nova carta para o CPU
    }

    // Verificar se o jogador ou o CPU tem dois Áses e, se sim, comprar novas cartas novamente
    if (
      (jogador[0].valor === 11 && jogador[1].valor === 11) ||
      (cpu[0].valor === 11 && cpu[1].valor === 11)
    ) {

      jogador = [] // Limpar o array do jogador
      cpu = [] // Limpar o array do CPU

    } else {

      cartasIguais = false // Se nenhum jogador tem dois Áses, sair do loop

    }

  }

  // DAR CARTA //

  // Criar variáveis para armazenar informações sobre as cartas do jogador e do CPU
  let textoCartaJogador = ""
  let textoCartasCPU = ""
  let pontuacaoJogador = 0
  let pontuacaoCPU = 0

  // Adicionar as cartas do jogador às variáveis e calcular a pontuação total do jogador
  for (let i = 0; i < jogador.length; i++) {
    pontuacaoJogador += jogador[i].valor // Adicionar o valor da carta à pontuação total do jogador
    textoCartaJogador += jogador[i].texto + " " // Adicionar o texto da carta à variável de texto

  }

  // Adicionar as cartas do CPU às variáveis e calcular a pontuação total do CPU
  for (let j = 0; j < cpu.length; j++) {
    if (j < jogador.length) {
      pontuacaoCPU += cpu[j].valor // Adicionar o valor da carta à pontuação total do CPU
      textoCartasCPU += cpu[j].texto + " " // Adicionar o texto da carta à variável de texto

    }

  }

  // Criar uma variável para permitir que o jogador compre novas cartas
  let outraCarta = true

  // COMPRAR CARTA JOGADOR

  // Loop para permitir que o jogador compre mais cartas até que ele deseje parar ou atinja uma pontuação superior a 21
  while (outraCarta && pontuacaoJogador < 22) {

    // Mostrar as cartas do jogador e a carta revelada do CPU e perguntar se o jogador deseja comprar outra carta
    const confirmarOutraCarta = confirm(`Suas cartas são ${textoCartaJogador}. A carta revelada do computador é ${cpu[0].texto}. \nDeseja comprar mais uma carta?`)

    if (confirmarOutraCarta) {

      // Comprar uma nova carta para o jogador, adicionar a nova carta ao array de cartas do jogador, adicionar o valor da nova carta à pontuação total do jogador e adicionar o texto da nova carta à variável de texto
      let outraCarta = comprarCarta()
      jogador.push(outraCarta)
      pontuacaoJogador += outraCarta.valor
      textoCartaJogador += outraCarta.texto

    } else {
      // O jogador não deseja comprar mais cartas, então sair do loop
      outraCarta = false
    }

  }

  //CPU JOGA A MSM QUANTIDADE DE CARTAS QUE O JOGADOR

  // Loop para que o CPU compre mais cartas enquanto sua pontuação total for menor ou igual à pontuação total do jogador e a pontuação total do jogador for menor que 21
  while (pontuacaoCPU <= pontuacaoJogador && pontuacaoJogador < 21) {

    // Comprar uma nova carta para o CPU, adicionar a nova carta ao array de cartas do CPU, adicionar o valor da nova carta à pontuação total do CPU e adicionar o texto da nova carta à variável de texto
    let outrasCartas1 = comprarCarta()
    cpu.push(outrasCartas1)
    pontuacaoCPU += outrasCartas1.valor
    textoCartasCPU += outrasCartas1.texto + " "
  }


  // Verificar quem venceu a partida com base nas pontuações totais do jogador e do CPU
  let finalPartida = " "

  // PARÂMETROS DE PONTUAÇÃO
  if (pontuacaoJogador > pontuacaoCPU && pontuacaoJogador <= 21) {
    finalPartida = "Você ganhou!"
    outraCarta = false;
  } else if (pontuacaoCPU > pontuacaoJogador && pontuacaoCPU <= 21) {
    finalPartida = "O computador ganhou!"
    outraCarta = false;
  } else if (pontuacaoJogador > 21) {
    finalPartida = "Você perdeu!"
    outraCarta = false;
  } else if (pontuacaoCPU > 21) {
    finalPartida = "Você perdeu!"
    outraCarta = false;
  } else {
    finalPartida = "Empate!"
  }

  // Mostrar as cartas e pontuações finais do jogador e do CPU, bem como a mensagem de resultado final
  alert(`Usuario - Cartas: ${textoCartaJogador} - Pontuação: ${pontuacaoJogador} \nComputador - Cartas: ${textoCartasCPU} - Pontuação: ${pontuacaoCPU} \n${finalPartida}`
  )

} else {

  alert(`Fim de Jogo`)

}