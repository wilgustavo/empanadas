(function (){
  'use strict';
  angular
    .module('app')
    .config(ProductoConfig);

  ProductoConfig.$inject = ['$stateProvider'];  
  function ProductoConfig($stateProvider) {
    $stateProvider.state({
      name: 'productos',
      url: '/productos',
      templateUrl: 'templates/productos.html',
      controller: 'ProductoCtrl as vm'
    });
  }
  
}());