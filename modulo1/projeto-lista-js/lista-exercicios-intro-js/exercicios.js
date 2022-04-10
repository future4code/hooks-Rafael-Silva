// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

   let alTura = Number(prompt("Responda qual seria a sua altura"))
   let larGuradaárea = Number(prompt("Qual é a sua  largura atualmente?"))
   let noVaLargura=alTura*larGuradaárea

   console.log(noVaLargura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  let idadeNumero = Number(prompt("qual é o ano atual?"))

  let anoNumero = Number(prompt("Qual é o ano de seu nascimento?"))

  let novoAno= idade-anoNumero

  console.log(novoAno)
  
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
   let recebe = peso
   let recebe2 = altura

   let metrosNumber = recebe2*recebe2
   let pesoMultiplicado = recebe

   return pesoMultiplicado /metrosNumber

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(){
  let pergunta= (prompt("Escreva aqui qual é o  seu nome?"))

  let anos= (prompt(" Escreva agora qual é a sua idade atualmente?"))

  let email= (prompt("Qual é o seu email?"))
  
 
  console.log(`Meu nome é ${pergunta}, tenho ${anos} anos, e o meu email é ${email}.`)

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const questionCollor= (prompt("Escreva aqui  uma cor  favorita"))

const questionCollor2= (prompt("Fale a  segunda cor favorita"))

const questionCollor3= (prompt("Fale  a terceira  cor favorita"))

const arrayNovoCor=[questionCollor,questionCollor2,questionCollor3]
 
 console.log(arrayNovoCor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  let fraseIntrig =string.toUpperCase()

  return fraseIntrig
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let ingresso= custo

  let custoTotal= valorIngresso

  let ingressoValor= ingresso/custoTotal 

 return ingressoValor
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  

  let booleano= string1>string2
  
  
return booleano
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 
  return array [0]
  
  

}

// EXERCÍCIO 10
function retornaUltimoElemento(array)
{ 
  let arrayNovo= array[array.length-1]

return arrayNovo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
 let valorArray=array[0]
 let outroArray = array[array.length-1]
 array[0]= outroArray

 array[array.length-1] = valorArray

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

 let novoValorBooleano= string1//variavel recebe uma string

 let valorBooleano= string2// recebe outra string

return novoValorBooleano.toUpperCase()===valorBooleano.toUpperCase()
// comparação das duas strings atribuidas na variavel 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}