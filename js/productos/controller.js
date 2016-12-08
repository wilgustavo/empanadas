(function (){
  'use strict';
  angular
    .module('app')
    .controller('ProductoCtrl', ProductoCtrl);

  ProductoCtrl.$inject = ['ProductoService'];  
  function ProductoCtrl(ProductoService) {
    var vm = this;

    ProductoService.listar().then(listar);
    
    function listar(datos) {
      vm.lista = datos;
    }  
  }
  
}());