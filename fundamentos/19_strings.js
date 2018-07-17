const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(10))      //Não gera erro!!!
console.log(escola.charCodeAt(3))   //Tabela ASCII ou Unicode
console.log(escola.indexOf('d'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))  //substitui um dígito pela letra 'e' //Usando Regex
console.log(escola.replace(/\w/g, 'e')) //substi-+tui todas(flag global 'g') as letras pela letra 'e'

console.log('Ana,Maria,Pedro')
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) //Regex