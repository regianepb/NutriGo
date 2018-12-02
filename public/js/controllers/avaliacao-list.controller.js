(function () {
  'use strict';

  angular
    .module('app')
    .controller('AvaliacaoListController', AvaliacaoListController);

  AvaliacaoListController.$inject = ['AvaliacaoService']
  function AvaliacaoListController(AvaliacaoService) {
    var vm = this;
    vm.avaliacao = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { nome: vm.busca } : {}
      AvaliacaoService.find(query)
        .success(function (data) {
          vm.avaliacao = data;
        });
    }

    function remover(avaliacao) {
      confirmBox('Deseja realmente remover a Avaliação "' + avaliacao.paciente + '"', function () {
        AvaliacaoService.remove(avaliacao._id)
          .success(function () {
            activate();
          });
      });

      
    }

  }
})();