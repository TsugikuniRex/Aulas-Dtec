const form = document.querySelector('#formulario');
const resultado = document.querySelector('.Resultado')
const botao = document.querySelector('botao')


form.addEventListener('submit', function (e) {
e.preventDefault();

    const peso = form.querySelector('.peso').value
    const altura = form.querySelector('.altura').value
    
    let IMC = peso / altura **2
    IMC = Number(IMC.toFixed(2))
    
    if(IMC <= 18.5){
        resultado.innerHTML = `<p class="paragrafo-resultado">Seu peso IMC é ${IMC} (Abaixo do peso).</p>`
    }else if(IMC >= 18.6 && IMC <= 24.9){
        resultado.innerHTML = `<p class="paragrafo-resultado">Seu peso IMC é ${IMC} (Peso normal).</p>`
    }else if(IMC >= 25.0 && IMC <= 29.9){
        resultado.innerHTML = `<p class="paragrafo-resultado">Seu peso IMC é ${IMC} (Sobrepeso).</p>`
    }else if(IMC >=30.0 && IMC <=34.9){
        resultado.innerHTML = `<p class="paragrafo-resultado">Seu peso IMC é ${IMC} (Obesidade de grau 1).</p>`
    }else if(IMC >=35.0 && IMC <=39.9){
        resultado.innerHTML = `<p class="paragrafo-resultado">Seu peso IMC é ${IMC} (Obesidade de grau 2).</p>`
    }else if(IMC >= 40){
        resultado.innerHTML = `<p class="paragrafo-resultado">Seu peso IMC é ${IMC} (Obesidade de grau 3).</p>`
    }else{
        resultado.innerHTML = `<p class = "bad">Valor Inválido</p>`
    }

})

