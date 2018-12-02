var mongoose = require('mongoose');

var model = mongoose.model('refeicoes');

module.exports = function(app) {
  app.get('/api/refeicoes', function(req, resp) {
    model.find().then(function(dados){
      resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    })
  });
  app.post('/api/refeicoes', function(req, resp) {
    model.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/refeicoes/:id', function(req, resp) {
    model.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/refeicoes/:id', function(req, resp) {
    model.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/refeicoes/:id', function(req, resp) {
    model.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}