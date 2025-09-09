//importar o express
const express = require('express')

//criando minha aplição
const app = express()

//Permitir trbalhar com json
app.use(express.json())

//Porta onde a API vai rodar
const PORT = 3001;

let usuarios = [
    {id: 1, nome: "Ana", idade:25},
    {id: 2, nome: "Carlos", idade:30},
    {id: 3, nome: "Maria", idade:22}
]

app.get('/usuarios',(req,res) => {
    res.json(usuarios);
})

//iniciar o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor na porta ${PORT}`)
})

