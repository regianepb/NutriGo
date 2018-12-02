(function () {
  'use strict';

  angular
    .module('app')
    .controller('DietaFormController', DietaFormController);

  DietaFormController.$inject = ['DietaService', '$location', '$routeParams', '$scope', 'PacienteService','RefeicaoService'];
  function DietaFormController(DietaService, $location, $routeParams, $scope, PacienteService, RefeicaoService) {
    var vm = this;
    vm.dieta = {};
    vm.titulo = 'Nova dieta';
    vm.modalTitulo = 'Nova dieta';

    vm.salvar = salvar;
    
    activate();
    buscaPacientes();    
    buscaRefeicoes();    
    
    function activate() {
      if ($routeParams.id) {
        DietaService.findById($routeParams.id)
          .success(function (data) {
            vm.dieta = data;
            vm.titulo = 'Editando Dieta';
          });
      }
    }

    function buscaPacientes() {      
      PacienteService.find()
        .success(function (data) {
          vm.paciente = data;
        });
    }

    function buscaRefeicoes() {      
      RefeicaoService.find()
        .success(function (data) {
          vm.refeicao = data;
        });
    }


    function salvar() {
      DietaService.save(vm.dieta)
        .success(function () {
          $location.path('/dieta');
        });
    }

    
  }
})();