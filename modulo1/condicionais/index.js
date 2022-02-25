//1:Exercícios de interpretação de código**
    
    //Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.

    //const respostaDoUsuario = prompt("Digite o número que você quer testar")
    //const numero = Number(respostaDoUsuario)
    
    //if (numero % 2 === 0) {
      //console.log("Passou no teste.")
    //} else {
      //console.log("Não passou no teste.")
    //}
    // 1:O código pergunta ao usuario um numero para dicidir se o usuario passou ou não no teste no console.
    //2 para os numero impa o usuario é reprovado para os numeros par é aprovado.

    // Exercicio 2 :O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    //let fruta = prompt("Escolha uma fruta")
//let preco
//switch (fruta) {
  //case "Laranja":
    //preco = 3.5
    //break;
  //case "Maçã":
    //preco = 2.25
    //break;
  //case "Uva":
    //preco = 0.30
    //break;
  //case "Pêra":
    //preco = 5.5
    //break; // BREAK PARA O ITEM c.
  //default:
    //preco = 5
    ///break;
//}
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//Respota (a. Para que serve o código acima?
//O código acima serve para mostrar ao 
//usuario o valor e o nome do produto)

//2 b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//Respota: O preço da fruta maça é 5$

// 3 c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console
//Resposta O preço da fruta  pera  é  R$  5.

//se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//acontece nada o código continua funcionando .

//const numero = Number(prompt("Digite o //primeiro número."))

//if(numero > 0) {
  //console.log("Esse número passou no ///teste")
	//let mensagem = "Essa mensagem é //secreta!!!"
//}

//console.log(mensagem)

//a) O que a primeira linha está fazendo? // Respota: A primeira linha esta perguntando ao usuario um numero.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Respota: aparece nada

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Respota: A variavel mensagem não tem nenhum valor dentro para o código funcionar deveria ter um valor dentro dessa variavel junto a mensagem.


//Exercícios de escrita de código**
    //1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
        //a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
        //b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
        //c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

        
        
    //const idade = Number(prompt("Qual é a sua idade?"))
    
    
    //if (idade >18) {
      //console.log("Você esta apto para dirigir")
    //}
     //else {
      //console.log("Você não esta apto para dirigir")
     //}


     //2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

     
     //const TurnoDoDia = (prompt("Qual turno você estuda? Por favor digite N se for (Noturno) ou digite V se for (Vespertino) ou digite M se for (Matutino"))
    
     //const TurnoDaNoite= {

      //if (TurnoDaNoite==="N")

      //console.log("Boa noite!")
 

     // const TurnoDaManha
      //if
        //(TurnoDaManha==="M")
        //console.log("Bom dia!")

        //let TurnoDaTarde
        //if
        //(TurnoDaTarde==="V")
        //console.log("Boa tarde!")
       

    
     
 const genero = prompt ("Qual o filme?")
 const ingresso= prompt(" Valor do ingresso?")

if (genero.toLowerCase() === "fantasia" && ingresso<15)