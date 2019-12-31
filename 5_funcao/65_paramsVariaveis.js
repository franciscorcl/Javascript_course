//Arguments é uma array interna a função que sempre está disponível

function soma() {
    let soma = 0;
    for ( i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 4.5))
console.log(soma(1.1, 2.2, 4.5, "Teste"))
console.log(soma("a","b","c"))