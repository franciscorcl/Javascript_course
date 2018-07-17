function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function soForVerdade(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

soForVerdade()
soForVerdade(null)
soForVerdade(undefined)
soForVerdade(NaN)
soForVerdade('')
soForVerdade(0)
soForVerdade(-1)
soForVerdade(' ')
soForVerdade('?')
soForVerdade([])
soForVerdade([1, 2])
soForVerdade({})