const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema(
    {
        nome:{type: String, require: true},
        idade:{type: Number, require: true}
    },
    {timestamps: true}
);





module.exports = mongoose.model('Pessoa', pessoaSchema)