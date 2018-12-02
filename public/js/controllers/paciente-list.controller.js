(function () {
  'use strict';

  angular
    .module('app')
    .controller('PacienteListController', PacienteListController);

  PacienteListController.$inject = ['PacienteService']
  function PacienteListController(PacienteService) {
    var vm = this;
    vm.paciente = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;


    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { nome: vm.busca } : {}
      PacienteService.find(query)
        .success(function (data) {
          vm.paciente = data;
        });
    }

    function remover(paciente) {
      confirmBox('Deseja realmente remover a Paciente "' + paciente.nome + '"', function () {
        PacienteService.remove(paciente._id)
          .success(function () {
            activate();
          });
      });
    }


 


  }
})();