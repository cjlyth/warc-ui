(function () {
  "use strict";
  var dependencies = [
              'ui.utils',
              'ui.state',
              'placeholders',
              'ui.bootstrap',
              'warcUI.filters', 
              'warcUI.services', 
              'warcUI.directives', 
              'warcUI.controllers'];

  var module = angular.module('warcUI', dependencies);

  module.config(['$stateProvider', '$urlRouterProvider', 
        function(stateProvider, urlRouterProvider) {    
    urlRouterProvider.otherwise("/");

    urlRouterProvider.when("", "/config/list");
    urlRouterProvider.when("/", "/config/list");
      
    stateProvider
      .state('config', {
        abstract: true, 
        url: '/config',
        controller: 'ConfigCtrl',
        template: '<div ui-view/>',
        onEnter: function(){
          console.log("enter config");
        }
      })
      .state('config.list', {
        url: '/list',
        templateUrl: '/templates/config-list.html',
        controller: 'ConfigListCtrl',
        onEnter: function(){
          console.log("enter config.list");
        }
      })
      .state('config.detail', {
        url: '/:id',
        templateUrl: '/templates/config-detail.html',
        controller: 'ConfigDetailCtrl',
        onEnter: function(){
          console.log("enter config.detail");
        }
      })
      ;
  }]);
}());
