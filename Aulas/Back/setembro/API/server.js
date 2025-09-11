//importar o express
const express = require('express')

//criando minha aplição
const app = express()

//Permitir trbalhar com json
app.use(express.json())

//Porta onde a API vai rodar
const PORT = 3000;

let usuarios = [
    {id: 1, nome: "Ana", idade:25},
    {id: 2, nome: "Carlos", idade:30},
    {id: 3, nome: "Maria", idade:22},
    {id: 4, nome: "José Maria", idade:67},
    {id: 5, nome: "Marcos", idade:25}
]

app.get("/", (req, res) =>{
    res.send("Página Inicial")
})

app.get('/usuarios',(req, res) => {
    res.json(usuarios);
})
            // Comandos para baixar API no meu PC //
// Set-ExecutionPolicy Bypass -Scope Process
// npm install -g nodemon
// npm init -y
// npm install express

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = usuarios.find(u => u.id == id)
    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).json({mensagem: "Usuário Não Encontrado"})
    }
})

app.get("/usuarios/buscar/:nome", (req,res) => {
    const nome = req.params.nome.toLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(nome))
    if(resultados.length > 0){
        res.json(resultados)
    }else{
        res.status(404).json({mensagem: "Usuário Não Encontrado"})
    }
})
app.get("/usuarios/idade/:idade", (req, res) => {
    const buscaridade = req.params.idade
    const usuario = usuarios.filter(u => u.idade == buscaridade)
    if(usuario.length > 0){
        res.json(usuario)
    }else{
        res.status(404).json({mensagem: "Usuario não Encontrado"})
    }

})


app.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id
    usuarios = usuarios.filter(u => u.id != id)
    res.json({mensagem: "Usuario Removido com sucesso"})
})

app.post("/usuarios", (req, res) => {
    const novoUsuario = {
        id: usuarios.length +1,
        nome: req.body.nome,
        idade: req.body.idade
    };

    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)
})

app.put("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const idade = req.body.idade;

    const usuario = usuarios.find(u => u.id == id)
    if(!usuario){
        return res.status(404).json({mensagem: "Usuario não Encontrado"})
    }
    usuario.nome = nome || usuario.nome;
    usuario.idade = idade || usuario.idade;
    res.json(usuario)
})
//iniciar o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor na porta ${PORT}`)
})
