(function (){
  'use strict';
  angular
    .module('app')
    .config(AppConfig);

  AppConfig.$inject = ['$urlRouterProvider'];
  function AppConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/productos');
  }
  
}());