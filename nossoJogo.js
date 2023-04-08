console.log("Boas vindas ao jogo de BlackJack!")
let inicio = confirm("Quer iniciar uma nova rodada?")

if(!inicio) {

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