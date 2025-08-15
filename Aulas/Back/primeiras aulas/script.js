const nu = 2
const nu2 = 5
const altura = 1.70
const peso = 50
const imc = peso/(altura*altura)

console.log("Eu vou lhe pegar \"Pikomon\"!!!");
console.log(`Eu tenho ${nu*nu2} real`);
console.log (`O seu IMC é ${imc}`);
/*
const = É uma variavel fixa
let = faz com que a variavel possa ser alterada
usar let ao inves de var
*/
/*const primeironumero = 5
const segundonumero = 10
const terceironumero = 9
const resultado = primeironumero + segundonumero 
let resultado2 = primeironumero + terceironumero
*/
//manda mensagem para o usuario
alert("Hello My Friend");
//manda mensagem para o usuario com confirmação
const comfirmacao = confirm("Você comfirma?");
console.log(comfirmacao);
//solicita informação ao usuario
const numeroUm = prompt("Coloque o primeiro numero");
const numeroDois = prompt("Coloque um segundo numero");
const n1 = Number(numeroUm);
const n2 = Number(numeroDois);
const resultado = n1+n2;
alert(`O resultado da soma é ${resultado}`);

let nome = "heitor"
nome.charAt(4)
console.log(nome[0])

const lista = [1,2,3]
lista[0]=15

let a = "valor" 
let b = a
a = "outro valor"

console.log(a)
console.log(b)