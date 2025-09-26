// Comandos para baixar API no meu PC //
// Set-ExecutionPolicy Bypass -Scope Process
// npm install -g nodemon
// para usar o nodemon escreva: nodemon "nome da pasta"
// npm init -y
// npm install express

//Importando o express
const express = require('express')

//Importação cors
const cors = require('cors')

//Criando minha aplicação
const app = express()

//Permitir trabalhar com json
app.use(express.json())
//permitir trabalhar com cors
app.use(cors())

//Porta onde a API vai rodar
const PORT = 3002;

let usuarios = [
    { id: 1, nome: "", idade: 25 },
    { id: 2, nome: "", idade: 30 },
    { id: 3, nome: "", idade: 22 },
    { id: 4, nome: "", idade: 35 },
    { id: 5, nome: "", idade: 25 }
]

app.get('/', (req, res) => {
    res.send("PÁGINA INICIAL")
})


app.get('/usuarios', (req, res) => {
    res.json(usuarios);
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = usuarios.find(u => u.id == id)

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({ mensagem: "Usuário Não Encontrado" })
    }
})

app.get('/usuarios/nome/:nome', (req, res) => {
    const buscaNome = req.params.nome.toLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(buscaNome))
    if (resultados.length > 0) {
        res.json(resultados)
    } else {
        res.status(404).json({ mensagem: "Usuário Não Encontrado" })
    }
})

app.get('/usuarios/idade/:idade', (req, res) => {
    const buscaIdade = req.params.idade
    const usuario = usuarios.filter(u => u.idade == buscaIdade)
    if (usuario.length > 0) {
        res.json(usuario)
    } else {
        res.status(404).json({ mensagem: "Usuário não encontrado" })
    }
})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id
    usuarios = usuarios.filter(u => u.id != id)
    res.json({ mensagem: "Usuário Removido com sucesso" })
})

app.post('/usuarios', (req, res) => {
    const ultimoid = usuarios.reduce((max, usuario) => Math.max(max, usuario.id), 0)
    const novoUsuario = {
        id: ultimoid + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };
    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)
})

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome
    const idade = req.body.idade

    const usuario = usuarios.find(u => u.id == id)

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário Não encontrado" })
    }
    usuario.nome = nome || usuario.nome
    usuario.idade = idade || usuario.idade
    res.json(usuario)
})

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})