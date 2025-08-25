const resultado = document.querySelector('.lista');
const botao = document.querySelector(".btn");    


botao.addEventListener('click', adicionar);

function adicionarTarefa() {
  const listaInput = document.getElementById('novaTarefa');
  if (listaInput.value !== '') {
    const novoLi = document.createElement('li');
    
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "remove";

    botaoRemover.addEventListener('click', function() {
        novoLi.remove();
    });




    novoLi.textContent = listaInput.value;
    novoLi.appendChild(botaoRemover);
    resultado.appendChild(novoLi);
    listaInput.value = '';
  }
}