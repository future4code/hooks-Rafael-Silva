// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
//array[length-1]=array

 return array.length


}

//retornaTamanhoArray()

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
// Parametro do array original 
//array [36,12,56,7,3]

//Uma variavel para receber o novo array
let arrayNovo= array 

array=arrayNovo 
//arrayNovo [3,7,12,36,56]

 return arrayNovo.sort((a,b) => a-b)
 
}
//retornaArrayOrdenado()

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    const numerosPares = array.filter((pares => pares % 2 ===0 ))     
return numerosPares

}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numero =[]
   
  for (let r = 0; r <array.length; r++){
if (array[r] % 2 ===0)
    numero.push(array[r]**2)
}

  return numero
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
 let maior = -Infinity

 let r = [0]
 while(r < array.length) {
     if(array[r] > maior){
         maior = array[r]
     }
     r++
 }

 for(let r = 0; r < array.length; r++){
     if(array[r] > maior){
         maior = array[r]
     }
 }

 numero = array[r]
 for (let numero of array){
     if(numero > maior){
         maior = numero
    }
 }
 return maior

}

 //EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {   
 let maiorNumero
 let menorNumero
 if (num1>num2){
maiorNumero =num1
menorNumero =num2
 }
 else {
maiorNumero=num2
menorNumero=num1
 }
 let maiorDivisivelPorMenor
let diferenca= maiorNumero - menorNumero
maiorDivisivelPorMenor = maiorNumero % menorNumero2==0
return{    
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca,   
}

}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let rr=[]
   let r=0
   for (;;) {
if (rr.length<n){
  if (r %2===0){
rr.push(r)
  r++
}
else{
r++
}

return rr
}


   
}
}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) { 
    
let nomedaLista =[
nome="Astrodev",
idade= 25,
email="astrodev@labenu.com.br",endereco="Rua do Futuro, 4"
]
let recebeNome =[]

recebeNome=  [...nomeDalista,...nomedaLista]

 return recebeNome
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {




}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}