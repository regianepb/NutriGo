const mongoose = require('mongoose');

const refeicaoSchema = new mongoose.Schema({
    descricao: String
}, {timestamps: true});
const refeicao = mongoose.model('refeicoes', refeicaoSchema);

module.exports = refeicao;
