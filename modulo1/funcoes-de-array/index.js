//1.  Leia o código abaixo
    

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi"},
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo"}
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })
    
    
    //a) O que vai ser impresso no console?
// Vai ser impresso os objetos e a posição dos objetos mostrando Nome.
  //Resposta
//Nome:Amanda Rangel apelido mandi
//Nome: Lais Petra apelido Laura
//Nome: Leticia Chijo apelido Chijo


// Segundo código 
  
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
})

console.log (novoArrayB)


//a) O que vai ser impresso no console?
// Respota sera impresso só os nomes dos objetos em uma nova array




const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
{ nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)


//a) O que vai ser impresso no console?
//Resposta
// vai continuar igual o primeiro exercicio mostrando nomes e apelidos com uma pequena diferencia que é ser filtrado em vez de mapear ou seja nenhuma alteração foi feita
//

//2. Exercicio de escrita de código

//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    

const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]

//a) Crie um novo array que contenha apenas o nome dos doguinhos




//b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a ``!"//

 const novoNome = pets.filter((pets) => {
 return pets.raca === `Poodle`

 }).map((Poodle) =>{
return`Você acaba de ganhar um desconto de 10% para tosar${Poodle.nome}`

 })
 console.log(novoNome)








