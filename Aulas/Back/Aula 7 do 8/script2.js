const pessoa1= {
    nome: "Charles",
    sobrenome: "Chevalier",
    idade: "15"
}
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

//função fabrica
function criarpessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
}
const pessoa2 = criarpessoa("Michael", "Kaiser", 19)
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)

//criação de metodos
function criarCachorro (nome, sono, fome){
    return {
        nome,
        sono,
        fome,

        latir(){
            console.log("auuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu!")
        },
        dormir(){
            if(this.sono) {
                this.sono = false 
            }
        }
    }
}
const cachoro1 = criarCachorro("bob",true,15)
cachoro1.latir()