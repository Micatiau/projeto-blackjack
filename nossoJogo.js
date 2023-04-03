console.log("Boas vindas ao jogo de BlackJack!")
let inicio = confirm("Quer iniciar uma nova rodada?")

if(inicio === false) {

   console.log("O jogo acabou!")

}else{

   const priCartaJogador = comprarCarta()
   const segCartaJogador = comprarCarta()
   const pontuacaojogador = priCartaJogador.valor + segCartaJogador.valor

   console.log(`Jogador: ${priCartaJogador.texto} ${segCartaJogador.texto} - pontuação final: ${pontuacaojogador}`)

   const priCartaCPU = comprarCarta()
   const segCartaCPU = comprarCarta()
   const pontuacaoCPU = priCartaCPU.valor + segCartaCPU.valor

   console.log(`Computador: ${priCartaCPU.texto} ${segCartaCPU.texto} - pontuação final: ${pontuacaoCPU}`)
   
   if(pontuacaojogador > pontuacaoCPU && pontuacaojogador <= 21) {
      console.log("Você ganhou!")
   } else if(pontuacaoCPU > pontuacaojogador && pontuacaoCPU <= 21){
      console.log("O computador ganhou!")
   } else if(pontuacaojogador > pontuacaoCPU && pontuacaojogador > 21){
      console.log("Você passou!")
   } else if(pontuacaoCPU > pontuacaojogador && pontuacaoCPU > 21){
      console.log("O computador passou!")
   } else if (pontuacaoCPU <= 21 && pontuacaojogador <= 21){
      console.log("Empate!")
   }
}

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */