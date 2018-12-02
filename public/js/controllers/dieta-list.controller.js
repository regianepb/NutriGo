(function () {
  'use strict';

  angular
    .module('app')
    .controller('DietaListController', DietaListController);

  DietaListController.$inject = ['DietaService'];
  function DietaListController(DietaService) {
    var vm = this;
    vm.dietas = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    
    function activate() {
      var query = vm.busca ? { descricao: vm.busca } : {}
      DietaService.find(query)
        .success(function (data) {
          vm.dietas = data;          
        });
    }

    function remover(dieta) {
      confirmBox('Deseja realmente remover a dieta "' + dieta.descricao + '"', function () {
        DietaService.remove(dieta._id)
          .success(function () {
            activate();
          });
      });

     
    }

  }
})();