var mongoose = require('mongoose');

var model = mongoose.model('avaliacoes');

module.exports = function(app) {
  app.get('/api/avaliacoes', function(req, resp) {
    model.find().then(function(dados){
      resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    })
  });
  app.post('/api/avaliacoes', function(req, resp) {
    model.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/avaliacoes/:id', function(req, resp) {
    model.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/avaliacoes/:id', function(req, resp) {
    model.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/avaliacoes/:id', function(req, resp) {
    model.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}