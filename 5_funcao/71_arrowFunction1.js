function dobro0 (a) {
    return 2 * a
}

let dobro1 = function (a) {
    return 2 * a
}

let dobro2 = (a) => {
    return 2 * a
}

let dobro3 = a => 2 * a // se tiver apenas um parametro de entrada dá para tirar o (), e quando tem apenas um return da para tirar {}

console.log(dobro0(1),dobro1(2), dobro2(4), dobro3(6))


let ola1 = function () {
    return "Olá1"
}

let ola2 = () => 'Olá2'
let ola3 = _ => 'Olá3'

console.log(ola1(),ola2(),ola3())