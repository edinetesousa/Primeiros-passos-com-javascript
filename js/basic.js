// console.log('Olá, Javascript!')

// var nome = 'Olá, Edi!'

// document.getElementById()

// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// function boasVindas(nome) {
//     alert(nome + 'seja bem-vinda!')
// }
// boasVindas('Edinete, ')

// function soma(n1, n2) {
//     return n1 + n2
// }
// var resultado = soma(5, 5)
// console.log(resultado)

// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
//Quando faço um saque de 500 reais
// Entao o valor do saque deve ser deduzido do meu saldo

// var saldo = 1000

// function saque(valor) {
//     saldo = saldo - valor
// }

// saque(500)
// console.log(saldo)

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Entao não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo
// var saldo = 1000

// function saque(valor) {
//     if (valor > saldo) {
//         console.log('Valor do saque superior ao saldo.')
//     } else {
//         saldo = saldo - valor
//     }
// }

// saque(1001)
// console.log(saldo)

// Cenario 3
// function saque(valor) {
//     if (valor > saldo) {
//         console.log('Valor do saque superior ao saldo.')
//     } else {
//         saldo = saldo - valor
//     }
// } 

//Objetos ou supervariáveis// 

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é ${this.idade}`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

//Constantes//

const nome = 'Darth Vaider'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)