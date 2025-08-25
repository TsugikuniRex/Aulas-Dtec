const botao = document.querySelector(".btn");
const resultado = document.querySelector('.Resultado');
const listaInput = document.getElementById('lista');

botao.addEventListener('click', adicionar);

function adicionar() {
  if (listaInput.value !== '') {
    const novoLi = document.createElement('li');

    botaoRemover.addEventListener('click', function() {
        novoLi.remove();
    });

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "remove";

    novoLi.textContent = listaInput.value;
    novoLi.appendChild(botaoRemover);
    resultado.appendChild(novoLi);
    listaInput.value = '';
  }
}