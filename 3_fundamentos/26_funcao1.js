//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) // Retorna NaN
imprimirSoma(2, 10, 4, 5) // Ignora o restante
imprimirSoma() // Retorna NaN

//Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(3, 5))
console.log(soma(3))