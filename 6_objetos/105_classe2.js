class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor' ) {
        super(sobrenome) // A classe super do 'Pai' e a classe 'Avo'
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(profissao) {
        super('Silva', profissao)
    }
}

const filho = new Filho
console.log(filho)

const filho2 = new Filho('Engenheiro')
console.log(filho2)