const prod1 = {} //Objeto Vazio
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar nomes com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1
    }
}

console.log(prod2)

//Formato textual de Json para objeto:
// '{ "nome": "Camisa Polo", "preco": "79.90"}'

