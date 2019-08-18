// Var declarada fora de uma funcao é Global
{
    {
        {
            {
                var sera = 'Será????'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)    // Var declarada em uma funcao fica apenas visivel no escopo da funcao
