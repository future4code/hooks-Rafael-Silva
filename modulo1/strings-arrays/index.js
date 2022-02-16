let array
console.log('a. ', array)
///undefined
array = null
console.log('b. ', array)
// Respotas null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// undefined
let i = 0
console.log('d. ', array[i])
// null
array[i+1] = 19
console.log('e. ', array)
// undefined
const valor = array[i+6]
console.log('f. ', valor)