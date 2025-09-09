// Criar um programa que exibe um comprimento de acordo com o horario do dia
//entre 0 e 11 ele manda bom dia 
//entre 12 e 17 ele manda boa tarde
//entre 18 e 23 ele manda boa noite
const texto = document.getElementById('texto');
const idade = Number(prompt("Qual a sua idade?"));

    if(idade >= 0 && idade <= 12){
        texto.innerHTML = `<h2>você é criança</h2>`;
    }else if(idade>=13 && idade<=17){
        texto.innerHTML = `<h2>você é adolescente</h2>`;
    }else if(idade>=18&& idade <=59){
        texto.innerHTML = `<h2>você é adulto</h2>`;
    }else if(idade >=60 && idade <=120){
        texto.innerHTML = `<h2>você é idoso</h2>`;
    }else{
        texto.innerHTML = `<h2>Como é que você tá vivo?</h2>`;
    }
const texto2 = document.getElementById('texto2');
const temperatura = Number(prompt("Qual a temperatura do local"))
    if(temperatura < 0 ){
        texto2.innerHTML = `<h2>Esta um frio infernal</h2>`
    }
    else if( temperatura >=0 && temperatura <= 20){
        texto2.innerHTML = `<h2>Esta frio</h2>`
    }else if(temperatura >= 21 && temperatura <= 30){
        texto2.innerHTML = `<h2>Esta agradavel</h2>`
    }else{
        texto2.innerHTML = `<h2>Esta muito quente</h2>`
    }   
    
const texto3 = document.getElementById('texto');
const verificar = Number(prompt("Qual a sua idade para dirijir?"));
    if(verificar <= 18){
        texto3.innerHTML = `<h2>Menor de idade</h2>`;
    }else if(verificar>=19 && verificar<=59){
        texto3.innerHTML = `<h2>você é adulto pode dirijir</h2>`;
    }else if(verificar>=60){
        texto3.innerHTML = `<h2>você é idoso dirijir</h2>`;
    }