const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML += numero;
texto.innerHTML += `<h2><strong>A raiz quadrada do seu numero é: ${Math.sqrt(numero)}</strong></h2>`;
texto.innerHTML += `<h2><strong>Seu inteiro é: ${Number.isInteger(numero)}</strong></h2>`;
texto.innerHTML += `<h2><strong>Seu numero é: ${Number.isNaN(numero)}</strong></h2>`;
texto.innerHTML += `<h2><strong>Seu numero arredondado pra baixo é: ${Math.floor(numero)}</strong></h2>`;
texto.innerHTML += `<h2><strong>Seu numero arredondado pra cima é: ${Math.ceil(numero)}</strong></h2>`;
texto.innerHTML += `<h2><strong>Seu numero com dois zero é: ${numero.toFixed(2)}</strong></h2>`;