require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3007;
const mongoURI = process.env.MONGO_URI;

// CONEXÃO
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
    .catch(error => {
        console.error("❌ Falha na conexão ao MongoDB:", error.message);
        process.exit(1);
    });

// Schema e modelo
const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true }
}, { timestamps: true });

const Usuario = mongoose.model('Usuario', usuarioSchema);

// APP
const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.get('/', (req, res) => res.send("PÁGINA INICIAL"));

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar usuários", erro: error.message });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (usuario) res.json(usuario);
        else res.status(404).json({ mensagem: 'Usuário não encontrado' });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao buscar usuário", erro: error.message });
    }
});

app.get('/usuarios/nome/:nome', async (req, res) => {
    try {
        const resultados = await Usuario.find({ nome: { $regex: req.params.nome, $options: 'i' } });
        if (resultados.length > 0) res.json(resultados);
        else res.status(404).json({ mensagem: "Usuário não encontrado" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
    }
});

app.get('/usuarios/idade/:idade', async (req, res) => {
    try {
        const resultados = await Usuario.find({ idade: req.params.idade });
        if (resultados.length > 0) res.json(resultados);
        else res.status(404).json({ mensagem: "Usuário não encontrado" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioDeletado) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
        res.json({ mensagem: "Usuário deletado", usuario: usuarioDeletado });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao deletar", erro: error.message });
    }
});

app.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = await Usuario.create(req.body);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao salvar usuário", erro: error.message });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const { nome, idade } = req.body;
        const usuarioAtualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            { nome, idade },
            { new: true, runValidators: true }
        );
        if (!usuarioAtualizado) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
        res.json(usuarioAtualizado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar", erro: error.message });
    }
});

app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
