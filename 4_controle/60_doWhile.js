function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * ((max-min) + min)
    return Math.floor(valor)
}

let opcao = -1

do {
    console.log(`Opção escolhida foi ${opcao}.`)
    opcao = getInteiroAleatorioEntre(-1, 10)
} while(opcao != -1)

console.log('Até a próxima!')