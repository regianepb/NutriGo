(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];
  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/avaliacoes', {
        templateUrl: 'partials/avaliacao-list.html',
        controller: 'AvaliacaoListController',
        controllerAs: 'vm'
      })
	  .when('/avaliacoes/new', {
        templateUrl: 'partials/avaliacao-form.html',
        controller: 'AvaliacaoFormController',
        controllerAs: 'vm'
      })
      .when('/avaliacoes/:id', {
        templateUrl: 'partials/avaliacao-form.html',
        controller: 'AvaliacaoFormController',
        controllerAs: 'vm'
      })
	  .when('/refeicoes', {
        templateUrl: 'partials/refeicao-list.html',
        controller: 'RefeicaoListController',
        controllerAs: 'vm'
      })
	  .when('/refeicoes/new', {
        templateUrl: 'partials/refeicao-form.html',
        controller: 'RefeicaoFormController',
        controllerAs: 'vm'
      })
      .when('/refeicoes/:id', {
        templateUrl: 'partials/refeicao-form.html',
        controller: 'RefeicaoFormController',
        controllerAs: 'vm'
      })
	  .when('/pacientes', {
        templateUrl: 'partials/paciente-list.html',
        controller: 'PacienteListController',
        controllerAs: 'vm'
      })
	  .when('/pacientes/new', {
        templateUrl: 'partials/paciente-form.html',
        controller: 'PacienteFormController',
        controllerAs: 'vm'
      })
      .when('/pacientes/:id', {
        templateUrl: 'partials/paciente-form.html',
        controller: 'PacienteFormController',
        controllerAs: 'vm'
      })
      .when('/dietas', {
        templateUrl: 'partials/dieta-list.html',
        controller: 'DietaListController',
        controllerAs: 'vm'
      })
      .when('/dietas/new', {
        templateUrl: 'partials/dieta-form.html',
        controller: 'DietaFormController',
        controllerAs: 'vm'
      })
      .when('/dietas/:id', {
        templateUrl: 'partials/dieta-form.html',
        controller: 'DietaFormController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();