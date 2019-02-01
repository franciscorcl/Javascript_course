const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // tem um conflito pois, a função this ficar ligado somente a pessoa

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()