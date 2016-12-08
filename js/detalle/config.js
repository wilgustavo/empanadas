(function (){
  'use strict';
  angular
    .module('app')
    .config(DetalleConfig);

  DetalleConfig.$inject = ['$stateProvider'];  
  function DetalleConfig($stateProvider) {
    $stateProvider.state({
      name: 'detalle',
      url: '/productos/{id}',
      templateUrl: 'templates/detalle.html',
      controller: 'DetalleCtrl as vm',
      resolve: {
        idProducto: getId
      }
    });

    getId.$inject = ['$stateParams'];
    function getId($stateParams) {
      return $stateParams.id;
    }
  }
  
}());