console.log(soma(3,5))

//function declaration
function soma(x, y) {
    return x+y
}

//function expression
const sub = function (x, y) {
    return x-y
}

console.log(sub(3,5)) //uma function expression só pode ser chamada depois de ser declarada

//named function expression
const mult = function mult(x ,y) {
    return x * y
}

console.log(sub(3,5)) //uma named function expression só pode ser chamada depois de ser declarada

