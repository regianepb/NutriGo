const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const avaliacaoSchema = new Schema({
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'pacientes'
      },
    itens: [{
        data: {
            type: Date,
            default: Date.now,
            required: true
          },
        observacao: String,  
        peso: Number,
        altura: Number,
        imc: Number,
        massaMagra: Number,
        massaGorda: Number
    }]      
  }, { timestamps: true });
const avaliacao = mongoose.model('avaliacoes', avaliacaoSchema);

module.exports = avaliacao;
