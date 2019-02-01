let teste = _ => console.log('Bom dia')

teste()

Promise.resolve('salve').then(function (message) { 
    console.log(message)
  })

function fazRequisicao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolvida");
        }, 500);
    });
}

//fazRequisicao().then(console.log);

fazRequisicao()
    .then(function(valor) {
        // fazer qualquer coisa com a resposta ou qualquer código
        console.log(valor)
        return valor + ', em teste'
    }).then(function (valor2) {
        valor2 = valor2 + ', fim de teste'
        console.log(valor2, valor2.length)
        return valor2, valor2.length
    }).then(function (texto, tipo){
        return console.log(texto, tipo);
    });