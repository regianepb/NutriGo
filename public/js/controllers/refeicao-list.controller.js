(function () {
  'use strict';

  angular
    .module('app')
    .controller('RefeicaoListController', RefeicaoListController);

  RefeicaoListController.$inject = ['RefeicaoService']
  function RefeicaoListController(RefeicaoService) {
    var vm = this;
    vm.Refeicao = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { nome: vm.busca } : {}
      RefeicaoService.find(query)
        .success(function (data) {
          vm.refeicao = data;
        });
    }

    function remover(Refeicao) {
      confirmBox('Deseja realmente remover a Refeição "' + Refeicao.descricao + '"', function () {
        RefeicaoService.remove(Refeicao._id)
          .success(function () {
            activate();
          });
      });

      
    }

  }
})();