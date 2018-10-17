const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: String,
    email: String,
    dataNascimento: {
        type: Date
    },
    telefone: String
}, {timestamps: true});
const paciente = mongoose.model('pacientes', pacienteSchema);

module.exports = paciente;
