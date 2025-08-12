// criar função
function saudacao(){
    console.log("Bom Dia!")
}

// ultilizando a função 
saudacao();

// função com parametros
function soma(a,b){
    return a + b;
}
console.log(soma(3,2))

function soma(x, y) {
    return x + y;
}

console.log(soma(2, 2)); // 4
console.log(soma(5, 10)); // 15

// função com parametros padrão
function somapadrao(x = 1,y = 1){
    return x + y
}
console.log(somapadrao())
console.log(somapadrao(5,10))

// funções anonimas

const raiz = function(n){
    return n ** 0.5
}
console.log(raiz(9))

//-----ARROW FUNCTION-----
const arroiz = (n) => n**0.5;
console.log(arroiz(25))

function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
}

saudacao('Luiz');   // Bom dia, Luiz!
saudacao('Maria');  // Bom dia, Maria!

function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const mensagem = saudacao('Felipe');
console.log(mensagem); // Bom dia, Felipe!

function exemplo() {
    const interna = 'sou interna';
    return interna;
}

console.log(interna); // ❌ Erro: interna is not defined

