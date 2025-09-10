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
    {id: 4, nome: "José Maria", idade:67}
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



//iniciar o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor na porta ${PORT}`)
})
