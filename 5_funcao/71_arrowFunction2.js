// Usando a função arrow o this não muda de acordo com o contexto

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
    
}

new Pessoa