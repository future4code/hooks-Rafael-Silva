  //Exercico 1
 const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
], 
   transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

 console.log(filme.elenco[0]) 
 console.log(filme.elenco[filme.elenco.////length - 1])
 console.log(filme.transmissoesHoje[2])

 //1. No console.log(filme.elenco[0])
 //sera imprimida essa mensagem Matheus Nachtergaele.

 // 2.console.log(filme.elenco[filme.elenco.length - 1])
 //sera imprimida essa mensagem Virginia Cavendish.

//3. No console.log(filme.transmissoesHoje[2])A mensagem que sera imprimida é 
//{canal: "Globo", horario: "14h"}


// 1. No console.log(filme.elenco[0])
// sera imprimida essa mensagem Matheus Nachtergaele.

 //2. console.log(filme.elenco[filme.elenco.length - 1])
// sera imprimida essa mensagem Virginia Cavendish.

 //3. No console.log(filme.transmissoesHoje[2])A mensagem que sera imprimida é 
//{canal: "Globo", horario: "14h"}


		
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
 //oque sera imprimido é const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"


const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))// no console deu false

console.log(minhaFuncao(pessoa, "altura"))
// na linha 97 esta undefined no console  porque altura não esta definida na variavel pessoa 
 

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

const pessoa = {
MeuNome: "Rafael",
MeusApelidos:["rafa","rafinha","fael"] , 
  linhas: [
	{ linha1:"rafinha"} ,
{ linha2: "rafa"} ,
	{ linha3: "fael"} ,


 ],  
}
console.log(pessoa.linhas[0])
console.log(pessoa.linhas[1])
console.log(pessoa.linhas[2])
console.log(`Olá meu nome é ${pessoa.MeuNome}, mas você pode me chamar de:${pessoa.MeusApelidos}.`)

const Novapessoa = {
...pessoa,
    nome: "Fernando",
	Apelidos:["Nando","Nandinho"],

}
console.log(`Olá meu nome é ${Novapessoa.nome}, mas você pode me chamar de:${Novapessoa.Apelidos}.`)

//2. Resolva os passos a seguir: 
    
    //a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
   // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

const dadosPessoais= {
Nome:"Rafael",
idade:"28",
profissão:"Professor"
}


const dadosPessoais2= {
	Nome:"Lucas",
	idade:"22",
    profissão:"Desenvolvedor"

}

function imprimeInformacao(info) {
	return[
		info.nome,
		info.idade. length,
		info.profissão


	]

}
console.log(dadosPessoais)
console.log(dadosPessoais2)

//3. Resolva os passos a seguir: 
    
    //a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    //b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    //c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

	const Carrinho=[]

	const fruta={
		TipoDeFruta: "Melão",// objeto
		Disponibilidade:true, 
	}

	const fruta2={
		TipoDefruta: "Abacate",// objeto2
		Disponibilidade:true,
	}

	const fruta3={
	   TipoDeFruta: "Limão",//objeto3
		Disponibilidade:true,
	}
 function colocandoNoCarrinho(fruta){
         Carrinho.push(fruta)


 }
 colocandoNoCarrinho(fruta) // Melão que é um objeto
 colocandoNoCarrinho(fruta2)// Abacate é um objeto
 colocandoNoCarrinho(fruta3)// Limão um objeto
 console.log(Carrinho) // variavel global que estava vazia