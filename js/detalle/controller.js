(function (){
  'use strict';
  angular
    .module('app')
    .controller('DetalleCtrl', DetalleCtrl);

  DetalleCtrl.$inject = ['idProducto', 'ProductoService'];  
  function DetalleCtrl(idProducto, ProductoService) {
    var vm = this;
    ProductoService.getProducto(idProducto).then(getProducto);

    function getProducto(producto) {
      vm.producto = producto;
    }
  }
  
}());