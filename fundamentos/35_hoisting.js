//Não é bom fazer isto
console.log('a =', a)
var a = 2        // O var sofre o hoisting (içamento)
console.log('a =', a)

console.log('a =', b)
//let b = 2       // O let não sofre hoisting
