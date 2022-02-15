let array
console.log('a. ', array) // Respota = undefined

array = null
console.log('b. ', array) // Resposta = o valor b é null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Respota = são "c" 11  tem caracteres 

let i = 0
console.log('d. ', array[i]) // Respotas null

array [i+1] = 19
console.log('e. ', array[i+1]) // R:undefined

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //R: SUBI NUM ÔNIBUS EM MIRROCOS" 28/

//Respota

const nome= prompt ("Qual é seu nome?")
console.log(nome)
const email= prompt ("Qual é seu email?")
console.log(email)
console.log ("Seu",email,"foi cadastradocom sucesso","seja bem vindo",nome)
