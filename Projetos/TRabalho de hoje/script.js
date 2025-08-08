const botaoCard = document.querySelector(".produto-card");

function botaoproduto() {
 
  const nomeProduto = botaoCard.querySelector(".nomeProduto").textContent;
  const descricao = botaoCard.querySelector(".descricao").textContent;
  const valor = botaoCard.querySelector(".valor").textContent;

  resultado.innerHTML += `<p> ${nomeProduto}, ${descricao}, ${valor}</p>`
}

function botaoproduto2(){

    const nomeProduto2 = botaoCard.querySelector(".nomeProduto2").textContent;
    const descricao2 = botaoCard.querySelector(".descricao2").textContent;
    const valor2 = botaoCard.querySelecto(".valor2").textContent;

    resultado.innerHTML+= `<p>${nomeProduto2}, ${descricao2}, ${valor2}</p>`
}