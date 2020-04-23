//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
delete produto.preco
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
        numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
        return (2444)
    }
}

console.log(carro.proprietario.endereco.numero)
console.log(carro.calcularValorSeguro())
console.log(carro['proprietario']['endereco']['logradouro'])

console.log({carro})
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log({carro})
console.log(carro.condutores)
// console.log(carro.condutores.length) // Vai Gerar erro