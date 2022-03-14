


if(confirm(" Boas vindas ao jogo Blackjack Deseja começar uma nova rodada? ")){
;
}
	
 else 
 console.log("O jogo acabou"); {

  }


  function comprarCarta() {
    
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
 
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
  
   
    const numero = cartas[Math.floor(Math.random() * 13)]
  
    
    const naipe = naipes[Math.floor(Math.random() * 4)]
  
    let valor
  
    if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { 
      valor = Number(numero)
    }
  
    
    const carta = {
      texto: numero + naipe,
      valor: valor
    }
    //cartas do Usuario
  const PrimeiraCarta = 11 //"A"
  const SegundaCarta = 10 //"K"
 const valor0 =21
//cartas do Computador
  const TerceiraCarta= 11//"A"
  const QuartaCarta= 11 // K
  let valor1 =22


   cartas.splice(1,11)

   if  (PrimeiraCarta+SegundaCarta ) {
    console.log("O computador tirou as cartas",cartas, " de Ouro por tanto a pontuação foi 21")

  }
else if ("O computador ganhou"){

console.log ("O computador ganhou")
}
console.log= (cartas)


naipes.splice(2,4)

if (PrimeiraCarta < SegundaCarta){
console.log("O usuario tirou as cartas",naipes,"O usuario ganhou")
}    
 
else if (naipes){
 alert("O usuario perdeu") 
}

console.log= (naipes)







  }
comprarCarta() 



