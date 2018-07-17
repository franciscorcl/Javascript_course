const a = { nome: 'teste'}

console.log(a)

const b = a     //Aponta para o mesmo endereço
b.nome = 'Opa'

console.log(a)
console.log(b)

let c = 3
let d = c

d++
console.log(c)
console.log(d)

/****************************************/
let valor
console.log(valor)

valor = null
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Não fazer isto
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco = null // Não fazer isto
console.log(produto)