const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dietaSchema = new Schema({
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'pacientes'
      },
    refeicao: {
        type: Schema.Types.ObjectId,
        ref: 'refeicoes'
      },  
    descricao: String 
  }, { timestamps: true });
const dieta = mongoose.model('dietas', dietaSchema);

module.exports = dieta;
