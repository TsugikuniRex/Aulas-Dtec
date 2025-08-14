const botao = document.getElementById('ofense')
const texto = document.getElementById('saida')
const form = document.querySelector('.formulario')
const botao2 = document.getElementById('outro')
const resultado = document.querySelector('.resultado')

pessoas = []

botao.addEventListener('click', function(){
    alert("é um botao");
    
    texto.innerHTML = 'Ele vai jogar de bola';
})


// botao2.addEventListener('click', function(evento){
//     evento.preventDefault()
//     const nome = form.querySelector('.nome').value;

//     const pessoa = {
//         nome
//     };

//     pessoas.push(pessoa);

//     resultado.innerHTML = `<p>Olá ${nome}!</p>`;
// })

form.addEventListener('click', function(evento){
    evento.preventDefault()
    const nome = form.querySelector('.nome').value;

    const pessoa = {
        nome
    };

    pessoas.push(pessoa);

    resultado.innerHTML = `<p>Olá ${nome}!</p>`;
})

const mudar = document.getElementById('coloridinho')
const body = document.body

mudar.addEventListener('click', ()=> {
    body.classList.toggle("black")
})