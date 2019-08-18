function Pessoa (nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

const p2 = new Pessoa('Luiz')
p2.falar()
console.log(p2.nome)