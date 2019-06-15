//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 4)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 4))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 4))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!!')