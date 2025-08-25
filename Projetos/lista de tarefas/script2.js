// Define a função 'adicionarTarefa' que será executada para adicionar uma nova tarefa à lista.
function adicionarTarefa() {
    // 1. Pega o elemento de input (onde o usuário digita a tarefa) usando seu ID.
    const input = document.getElementById("novaTarefa");
    // 2. Obtém o texto digitado no input e remove os espaços em branco no início e no fim.
    const texto = input.value.trim();
    
    // 3. Checa se o texto está vazio. Se estiver, a função para e não faz nada.
    if (texto === "") {
        return;
    }
    
    // 4. Cria um novo elemento de lista HTML (<li>). Este será o item da tarefa.
    const li = document.createElement("li");
    
    // 5. Cria um novo parágrafo HTML (<p>). Este parágrafo vai conter o texto da tarefa.
    const p = document.createElement("p");
    // Define o texto do parágrafo como o texto digitado pelo usuário.
    p.textContent = texto;
    // Adiciona uma classe CSS para estilização (provavelmente a classe "tarefa").
    p.className = "tarefa";
    // Adiciona o parágrafo dentro do item da lista.
    li.appendChild(p);
    
    // 6. Cria um novo botão HTML (<button>) para remover a tarefa.
    const btnRemover = document.createElement("button");
    // Define o texto do botão como "Remover".
    btnRemover.textContent = "Remover";
    // Adiciona uma classe CSS para estilização (provavelmente a classe "remove").
    btnRemover.className = "remove";
    // Define a ação que acontece quando o botão é clicado.
    // A função anônima `li.remove()` remove o item da lista pai (o <li>) quando o botão é clicado.
    btnRemover.onclick = function() {
        li.remove();
    };
    
    // 7. Define a ação que acontece quando o item da lista (o <li>) é clicado.
    // O método `classList.toggle("feito")` adiciona ou remove a classe CSS "feito" no <li>.
    // Isso é útil para marcar a tarefa como concluída, por exemplo, riscando-a.
    li.onclick = function() {
        li.classList.toggle("feito");
    };
    
    // 8. Adiciona o botão de remover ao item da lista.
    li.appendChild(btnRemover);
    
    // 9. Pega a lista HTML (normalmente uma <ul> ou <ol>) usando seu ID "lista".
    // Em seguida, adiciona o novo item da lista (`li`) como um filho, colocando-o no final da lista.
    document.getElementById("lista").appendChild(li);
    
    // 10. Limpa o valor do campo de input para que o usuário possa adicionar a próxima tarefa facilmente.
    // Embora não esteja no seu código, essa é uma boa prática para melhorar a experiência do usuário.
    // input.value = '';
}