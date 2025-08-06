    const nome = prompt('Digite seu nome completo:');
    const length = nome.length;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML += `<p class="resultado"><strong>Seu nome é:</strong> ${nome}</p>`;
    resultado.innerHTML += `<p class="resultado"><strong>Número total de letras do seu nome:</strong> ${nome.replace(/\s/g,'').length}</p>`;
    resultado.innerHTML += `<p class="resultado"><strong>A Primeira letra do seu nome é: ${nome[0]}</strong></p>`
    resultado.innerHTML += `<p class="resultado"><strong>A Ultaima letra do seu nome é: ${nome[length -1]}</strong></p>`
    resultado.innerHTML += `<p class="resultado"><strong>O índice da primeira letra "a": ${nome.indexOf("a")}</strong></p>`
    resultado.innerHTML += `<p class="resultado"><strong>O índice da última letra "a": ${nome.lastIndexOf("a")}</strong></p>`
    resultado.innerHTML += `<p class="resultado"><strong>As 3 últimas letras do seu nome é: ${nome.slice(-3)}</strong></p>`
    resultado.innerHTML += `<p class="resultado"><strong>Seu nome em letra maiuscula: ${nome.toUpperCase()}</strong></p>`
    resultado.innerHTML += `<p class="resultado"><strong>Seu nome em letra minuscula: ${nome.toLocaleLowerCase()}</strong></p>`
    resultado.innerHTML += `<p class="resultado"><strong>Seu nome separado por virgula: ${nome.split(' ')}</strong></p>`

    /* tofixed() = transforma numero decimal em inteiro dependendo da quantidade de casas escolhidas
    number = trnasforma sting em numero
    0.1+0.7 = 0.7999999999...
    */