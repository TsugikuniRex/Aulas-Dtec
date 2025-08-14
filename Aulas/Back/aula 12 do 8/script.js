// operadores aritimeticos + - * ** /
// valores logicos and = &&, or = ||, not = !
// Operador AND(&&) será "true" se as duas condições forem "true"
if(4<5 && 4>3){
    console.log("Está Correto")
}
else {
    console.log("Reprovado!!!")
};

const temdinheiro = true;
const estasol = true;
const tenhotempo= false;

// Operador OR(||)sera "true" se uma condição for "true"
if (temdinheiro && estasol || tenhotempo){
    console.log("Eu vou dirijir depois de Beber o Viadinho alí só sabe correr, se multar não vou me importar, vou atropelar!!!")
}
else{
    console.log("Busque comer Cimento")
}

// operador NOT(!) inverte o valor booleano
const estachovendo = false

console.log(!estachovendo)

console.log(!!"texto") // Strings não vazio retorna "true"
console.log(!!"") // String vazio retorna "false"
console.log(!!0)// Número 0 retorna "false"
console.log(!!123)// Qualquer número != de 0 é "true"
console.log(!!undefined)// Retorna false

const email = ""
if (!!email ){
    console.log("Email preenchido")
} else{
    console.log("Campo de email vazio")
}

//prioridade de operadores

const resultado = true || false && false
console.log(resultado)

const resultado2 = (true || false) && false
console.log(resultado2)

const resultado3 = !true && true || false && (!false || !true)&& false
console.log(resultado3)

//EXEMPLO PRATICO LOGIN E SENHA
const usuario = "carlos"
const senha = "1457"

const usuariodigitado = "carlos"
const senhadigitada = "1457"

const logado = usuariodigitado === usuario && senhadigitada === senha
console.log(logado)

// OPERADOR TERNARIO
const pontuacaoUsuario = 999
if (pontuacaoUsuario < 1000){
    console.log("Você não é vip")
} else {
    console.log("Seja bem vindo Usuario VIP")
}
// Condição ? valor se verdadeiro : valor se falso
const nivelusuario = pontuacaoUsuario < 1000 ? "Usuario Normal" : "Usuario VIP"
console.log(nivelusuario)

const corusuario = null;
const corpadrao= corusuario || "verde"
console.log(corpadrao)

const hora = 19
if(hora >= 0 && hora <= 11){
    console.log("Bom Dia")
} else if(hora >= 12 && hora <= 17){
    console.log("Boa Tarde")
}else if(hora >=18 && hora <=23){
    console.log("Boa Noite")
}else{
    console.log("Erro...")
}