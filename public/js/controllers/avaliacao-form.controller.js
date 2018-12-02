(function () {
  'use strict';

  angular
    .module('app')
    .controller('AvaliacaoFormController', AvaliacaoFormController);

  AvaliacaoFormController.$inject = ['AvaliacaoService', '$location', '$routeParams','PacienteService'];
  function AvaliacaoFormController(AvaliacaoService, $location, $routeParams, PacienteService) {
    var vm = this;
    vm.avaliacao = {};
    vm.titulo = 'Nova Avaliação';

    vm.salvar = salvar;

    activate();
    buscaPacientes();    

    ////////////////

    function activate() {
      if ($routeParams.id) {
        AvaliacaoService.findById($routeParams.id)
          .success(function (data) {
            vm.avaliacao = data;
            vm.titulo = 'Editando Avaliação'
          });
      }
    }

    function buscaPacientes() {      
      PacienteService.find()
        .success(function (data) {
          vm.paciente = data;
        });
    }

    function salvar() {
      AvaliacaoService.save(vm.avaliacao)
        .success(function () {
          $location.path('/avaliacao')
        })
    }
  }
})();