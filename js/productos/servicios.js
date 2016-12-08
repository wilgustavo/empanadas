(function (){
  'use strict';

  var url = 'http://localhost:3008/productos';

  angular
    .module('app')
    .factory('ProductoService', ProductoService);

  ProductoService.$inject = ['$http'];  
  function ProductoService($http) {
    return {
      listar: listar
    };

    function listar() {
      return $http.get(url).then(ok).catch(fail);

      function ok(response) {
        return response.data;
      }
      function fail(err) {
        throw err.data;
      }
    }

  }
  
}());