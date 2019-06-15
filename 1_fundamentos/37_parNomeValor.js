const saudacao = 'OPA'  //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'  //contexto léxico 2
    return saudacao
}

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)
