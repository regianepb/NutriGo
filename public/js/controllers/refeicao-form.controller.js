(function () {
  'use strict';

  angular
    .module('app')
    .controller('RefeicaoFormController', RefeicaoFormController);

  RefeicaoFormController.$inject = ['RefeicaoService', '$location', '$routeParams'];
  function RefeicaoFormController(RefeicaoService, $location, $routeParams) {
    var vm = this;
    vm.refeicao = {};
    vm.titulo = 'Nova Refeição';

    vm.salvar = salvar;

    activate();

    ////////////////

    function activate() {
      if ($routeParams.id) {
        RefeicaoService.findById($routeParams.id)
          .success(function (data) {
            vm.refeicao = data;
            vm.titulo = 'Editando Refeição'
          });
      }
    }

    function salvar() {
      RefeicaoService.save(vm.refeicao)
        .success(function () {
          $location.path('/refeicao')
        })
    }
  }
})();