require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('./models/User')
const Pessoa = require('./models/Pessoa')

const PORT = process.env.PORT || 3007;
const mongoURI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;


// CONEXÃO
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
    .catch(error => {
        console.error("❌ Falha na conexão ao MongoDB:", error.message);
        process.exit(1);
    });

// função geradora do token de login
const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' })
}

const protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(' ')[1]
            jwt.verify(token, JWT_SECRET);
            next()
        } catch (error) {
            return res.status(401).json({ mensagem: "Não autorizado, token Inválido" })
        }
    }
}

// APP
const app = express();
app.use(express.json());
app.use(cors());

// rota do admin
app.post('/api/register-admin', async (req,res) => {
    const {email, password} = req.body
    try{
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({mensagem: "Nome de usuário Já existe"})
        }
        const user = await User.create({email, password})
        res.status(201).json({mensagem: "Usuário criado com sucesso"})
    }catch (error) {
        res.status(500).json({mensagem: "Erro ao registro admin", erro: error.mensagem})
    }
})

app.post('/api/login-admin', async(req, res)=>{
    const {email, password} = req.body
    try {
        const user = await User.findOne({email}).select('+password');
        if(user && (await user.matchPassword(password))){
            res.json({
                email: user.email,
                tokken: generateToken(user._id),
                mensagem: "Login Realizado com sucesso"
            })
        }else {
            res.status(401).json({mensagme: "Credencias inválidas"})
        }
    }catch(error) {
        res.status(400).json({mensagem: "Erro no login", erro: error.mensagem})
    }
})

// Rotas
app.get('/', (req, res) => res.send("PÁGINA INICIAL"));

app.get('/pessoas', async (req, res) => {
    try {
        const usuarios = await Pessoa.find({});
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar usuários", erro: error.message });
    }
});

app.get('/Pessoas/:id', async (req, res) => {
    try {
        const usuario = await Pessoa.findById(req.params.id);
        if (usuario) res.json(usuario);
        else res.status(404).json({ mensagem: 'Usuário não encontrado' });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao buscar usuário", erro: error.message });
    }
});

app.get('/pessoas/nome/:nome', async (req, res) => {
    try {
        const resultados = await Pessoa.find({ nome: { $regex: req.params.nome, $options: 'i' } });
        if (resultados.length > 0) res.json(resultados);
        else res.status(404).json({ mensagem: "Usuário não encontrado" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
    }
});

app.get('/pessoas/idade/:idade', async (req, res) => {
    try {
        const resultados = await Pessoa.find({ idade: req.params.idade });
        if (resultados.length > 0) res.json(resultados);
        else res.status(404).json({ mensagem: "Usuário não encontrado" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
    }
});

app.delete('/pessoas/:id',protect, async (req, res) => {
    try {
        const pessoaDeletado = await Pessoa.findByIdAndDelete(req.params.id);
        if (!pessoaDeletado) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
        res.json({ mensagem: "Usuário deletado", usuario: usuarioDeletado });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao deletar", erro: error.message });
    }
});

app.post('/pessoas', async (req, res) => {
    try {
        const novoUsuario = await Pessoa.create(req.body);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao salvar usuário", erro: error.message });
    }
});

app.put('/pessoas/:id', async (req, res) => {
    try {
        const { nome, idade } = req.body;
        const usuarioAtualizado = await Pessoa.findByIdAndUpdate(
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
