let num1 =10;
const num2 = 9

let preco= 10.6754
console.log(preco.toFixed(2))/* CUIDADO ESTE COMANDO TRANSFORMA NÚMERO EM STRING! */

const preco2= Number(preco.toFixed(2))/*TRANSFORMA A STRING NOVAMENTE EM NÚMERO */

console.log(Number.isNaN(preco2))//verificar se a variavel é um número ou não

//  Conversão coercitiva
let numero3 = "5"
let numero4 = 5
console.log(numero3+numero4)

//Inprecisão Númerica
let total = 0.7 + 0.1
total = Number(total.toFixed(2))
console.log(total)